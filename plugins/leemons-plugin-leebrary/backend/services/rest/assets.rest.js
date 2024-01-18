/* eslint-disable no-console */
/**
 * @typedef {import('moleculer').ServiceSchema} ServiceSchema Moleculer's Service Schema
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

const { LeemonsMiddlewareAuthenticated } = require('@leemons/middlewares');
const { LeemonsError } = require('@leemons/error');
const _ = require('lodash');
const got = require('got');
const { metascraper } = require('../../core/shared');

const { duplicate } = require('../../core/assets/duplicate');
const { remove } = require('../../core/assets/remove');
const { getByUser } = require('../../core/assets/getByUser');
const { getByIds } = require('../../core/assets/getByIds');
const { getByAsset: getPermissions } = require('../../core/permissions/getByAsset');
const { getUsersByAsset } = require('../../core/permissions/getUsersByAsset');
const canAssignRole = require('../../core/permissions/helpers/canAssignRole');
const { getByCategory } = require('../../core/permissions/getByCategory');
const { search: getByCriteria } = require('../../core/search');
const { add: addPin } = require('../../core/pins/add');
const { removeByAsset: removePin } = require('../../core/pins/removeByAsset');
const { getByUser: getPinsByUser } = require('../../core/pins/getByUser');
const { setAsset } = require('../../core/assets/set');
const { prepareAsset } = require('../../core/assets/prepareAsset');

/** @type {ServiceSchema} */
module.exports = {
  addRest: {
    rest: {
      path: '/',
      method: 'POST',
    },
    middlewares: [LeemonsMiddlewareAuthenticated()],
    async handler(ctx) {
      const asset = await setAsset({ ...ctx.params, ctx });
      return { status: 200, asset };
    },
  },
  updateRest: {
    rest: {
      path: '/:id',
      method: 'PUT',
    },
    middlewares: [LeemonsMiddlewareAuthenticated()],
    async handler(ctx) {
      const asset = await setAsset({ ...ctx.params, ctx });
      return { status: 200, asset };
    },
  },
  removeRest: {
    rest: {
      path: '/:id',
      method: 'DELETE',
    },
    middlewares: [LeemonsMiddlewareAuthenticated()],
    async handler(ctx) {
      const { id } = ctx.params;
      const deleted = await remove({ id, ctx });
      return { status: 200, deleted };
    },
  },
  duplicateRest: {
    rest: {
      path: '/:id',
      method: 'POST',
    },
    middlewares: [LeemonsMiddlewareAuthenticated()],
    async handler(ctx) {
      const { id: assetId, preserveName, indexable, public: isPublic } = ctx.params;

      const asset = await duplicate({
        assetId,
        preserveName,
        indexable,
        public: isPublic,
        ctx: { ...ctx, callerPlugin: ctx.prefixPN('') },
      });
      return { status: 200, asset };
    },
  },
  myRest: {
    rest: {
      path: '/my',
      method: 'GET',
    },
    middlewares: [LeemonsMiddlewareAuthenticated()],
    async handler(ctx) {
      const assets = await getByUser({ userId: ctx.meta.userSession.id, ctx });
      return { status: 200, assets };
    },
  },
  // ! xapi ? middleware?
  getRest: {
    rest: {
      path: '/:id',
      method: 'GET',
    },
    middlewares: [LeemonsMiddlewareAuthenticated()],
    async handler(ctx) {
      const { id: assetId } = ctx.params;
      const [asset] = await getByIds({
        ids: assetId,
        withFiles: true,
        checkPermissions: true,
        ctx,
      });

      if (!asset) {
        throw new LeemonsError(ctx, { message: 'Asset not found', httpStatusCode: 400 });
      }

      const { role: assignerRole, permissions } = await getPermissions({ assetId, ctx });

      if (!permissions?.view) {
        throw new LeemonsError(ctx, {
          message: 'Unauthorized to view this asset',
          httpStatusCode: 401,
        });
      }

      let assetPermissions = false;

      if (permissions?.edit) {
        assetPermissions = await getUsersByAsset({ assetId, ctx });
        assetPermissions = assetPermissions.map((user) => {
          const item = { ...user };
          item.editable = canAssignRole({
            userRole: assignerRole,
            assignedUserCurrentRole: item.permissions[0],
            newRole: item.permissions[0],
          });
          return item;
        });
      }

      return {
        status: 200,
        asset: { ...asset, canAccess: assetPermissions },
      };
    },
  },
  listRest: {
    rest: {
      path: '/list',
      method: 'GET',
    },
    middlewares: [LeemonsMiddlewareAuthenticated()],
    async handler(ctx) {
      const {
        category,
        criteria,
        type,
        published,
        preferCurrent,
        showPublic,
        searchInProvider,
        roles,
        providerQuery,
        programs,
        subjects,
        onlyShared,
        categoryFilter,
      } = ctx.params;

      const trueValues = ['true', true, '1', 1];

      let assets;
      const publishedStatus =
        published === 'all' ? published : [...trueValues, 'published'].includes(published);
      const displayPublic = trueValues.includes(showPublic);
      const searchProvider = trueValues.includes(searchInProvider);
      const preferCurrentValue = trueValues.includes(preferCurrent);
      const _onlyShared = trueValues.includes(onlyShared);
      const parsedRoles = JSON.parse(roles || null) || [];
      const _providerQuery = JSON.parse(providerQuery || null);
      const _programs = JSON.parse(programs || null);
      const _subjects = JSON.parse(subjects || null);

      const shouldSerachByCriteria =
        !_.isEmpty(criteria) || !_.isEmpty(type) || _.isEmpty(category);

      if (shouldSerachByCriteria) {
        assets = await getByCriteria({
          category: categoryFilter,
          criteria,
          type,
          indexable: true,
          published: publishedStatus,
          showPublic: displayPublic,
          preferCurrent: preferCurrentValue,
          roles: parsedRoles,
          searchInProvider: searchProvider,
          providerQuery: _providerQuery,
          programs: _programs,
          subjects: _subjects,
          onlyShared: _onlyShared,
          sortBy: 'updated_at',
          sortDirection: 'desc',
          ctx,
        });
      } else {
        assets = await getByCategory({
          categoryId: category,
          published: publishedStatus,
          indexable: true,
          preferCurrent: preferCurrentValue,
          showPublic: displayPublic,
          roles: parsedRoles,
          searchInProvider: searchProvider,
          providerQuery: _providerQuery,
          programs: _programs,
          subjects: _subjects,
          onlyShared: _onlyShared, // not used within getByCategory()
          sortBy: 'updated_at',
          sortDirection: 'desc',
          ctx,
        });
      }

      // TODO: Temporary solution
      if (parsedRoles?.length === 1 && parsedRoles[0] === 'owner') {
        assets = assets.filter((asset) => asset.role === 'owner');
      }

      return {
        status: 200,
        assets,
      };
    },
  },
  listByIdsRest: {
    rest: {
      path: '/list',
      method: 'POST',
    },
    middlewares: [LeemonsMiddlewareAuthenticated()],
    async handler(ctx) {
      const {
        assets: assetIds,
        filters: { published, showPublic, indexable = true, onlyPinned },
      } = ctx.params;

      if (_.isEmpty(assetIds)) {
        throw new LeemonsError(ctx, { message: 'No assets were specified' });
      }

      let assets = await getByIds({
        ids: assetIds,
        withFiles: true,
        checkPermissions: true,
        indexable,
        showPublic,
        published, // not used within getByIds()
        ctx,
      });
      if (onlyPinned) {
        assets = assets.filter((asset) => asset.pinned);
      }

      const processSingnedUrlsPromises = assets.map((asset) =>
        prepareAsset({ rawAsset: asset, isPublished: published, ctx })
      );
      try {
        const results = await Promise.allSettled(processSingnedUrlsPromises);
        const finalAssets = results
          .filter((result) => result.status === 'fulfilled')
          .map((result) => result.value);
        // final assets are being filtered by the result of each promise
        return {
          status: 200,
          assets: finalAssets,
        };
      } catch (error) {
        throw new LeemonsError(ctx, {
          httpStatusCode: 500,
          message: `Error preparing final assets: ${error}`,
        });
      }
    },
  },
  urlMetadataRest: {
    rest: {
      path: '/url-metadata',
      method: 'GET',
    },
    middlewares: [LeemonsMiddlewareAuthenticated()],
    async handler(ctx) {
      const { url } = ctx.params;
      if (_.isEmpty(url)) {
        throw new LeemonsError(ctx, { message: 'Url is required', httpStatusCode: 400 });
      }
      let metas = {};
      try {
        const response = await got(url);
        const { body: html } = response;
        metas = await metascraper({ html, url });
      } catch (e) {
        ctx.logger.error(e);
        throw new LeemonsError(ctx, { message: `Error getting URL metadata: ${url}` });
      }

      return { status: 200, metas };
    },
  },
  addPinRest: {
    rest: {
      path: '/pins',
      method: 'POST',
    },
    middlewares: [LeemonsMiddlewareAuthenticated()],
    async handler(ctx) {
      const { asset: assetId } = ctx.params;
      if (!assetId || _.isEmpty(assetId)) {
        throw new LeemonsError(ctx, { message: 'Asset id is required', httpStatusCode: 400 });
      }
      const pin = await addPin({ assetId, ctx });
      return { status: 200, pin };
    },
  },
  removePinRest: {
    rest: {
      path: '/pins/:id',
      method: 'DELETE',
    },
    middlewares: [LeemonsMiddlewareAuthenticated()],
    async handler(ctx) {
      const { id: assetId } = ctx.params;
      const pin = await removePin({ assetId, ctx });
      return { status: 200, pin };
    },
  },
  pinsRest: {
    rest: {
      path: '/pins',
      method: 'GET',
    },
    middlewares: [LeemonsMiddlewareAuthenticated()],
    async handler(ctx) {
      const {
        criteria,
        type,
        published,
        preferCurrent,
        showPublic,
        providerQuery,
        categoryFilter,
        category,
      } = ctx.params;

      const _providerQuery = JSON.parse(providerQuery || null);
      const _category = category || categoryFilter === 'undefined' ? null : categoryFilter;
      const publishedStatus = published === 'all' ? published : published === 'published';
      // const assetPublished = ['true', true, '1', 1].includes(published);
      const displayPublic = ['true', true, '1', 1].includes(showPublic);
      const _preferCurrent = ['true', true, '1', 1].includes(preferCurrent);

      const assets = await getByCriteria({
        criteria,
        category: _category,
        type,
        pinned: true,
        indexable: true,
        published: publishedStatus,
        showPublic: displayPublic,
        preferCurrent: _preferCurrent,
        providerQuery: _providerQuery,
        ctx,
      });

      return {
        status: 200,
        assets,
      };
    },
  },
  hasPinsRest: {
    rest: {
      path: '/has-pins',
      method: 'GET',
    },
    middlewares: [LeemonsMiddlewareAuthenticated()],
    async handler(ctx) {
      const pins = await getPinsByUser({ ctx });
      return {
        status: 200,
        hasPins: pins.length > 0,
      };
    },
  },
};
