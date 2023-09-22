/* eslint-disable no-param-reassign */
const {
  isEmpty,
  flatten,
  map,
  find,
  compact,
  uniq,
  isNil,
  intersection,
  isArray,
  uniqBy,
  filter,
  keyBy,
  forEach,
  groupBy,
} = require('lodash');

const { CATEGORIES } = require('../../config/constants');
const { getByAssets: getPermissions } = require('../permissions/getByAssets');
const { find: findBookmarks } = require('../bookmarks/find');
const { getByIds: getCategories } = require('../categories/getByIds');
const { getByAssets: getPins } = require('../pins/getByAssets');
const getAssetPermissionName = require('../permissions/helpers/getAssetPermissionName');
const { getClassesPermissions } = require('../permissions/getClassesPermissions');
const canUnassignRole = require('../permissions/helpers/canUnassignRole');

async function getByIds({
  assetsIds,
  withFiles,
  withSubjects = true,
  withTags = true,
  withCategory = true,
  checkPins = true,
  checkPermissions,
  indexable,
  showPublic,
  ctx,
}) {
  const { userSession } = ctx.meta;
  const ids = flatten([assetsIds]);

  const query = { id: ids };

  if (!isNil(indexable)) {
    query.indexable = indexable;
  }

  let assets = await ctx.tx.db.Assets.find(query).lean();

  // ·········································································
  // ADMIN PROGRAMS
  let canEditPerms = [];
  const [viewPerms, editPerms] = await Promise.all([
    ctx.tx.call('users.permissions.getItemPermissions', {
      item: map(assets, 'id'),
      type: ctx.prefixPN('asset.can-view'),
      returnRaw: true,
    }),

    ctx.tx.call('users.permissions.getItemPermissions', {
      item: map(assets, 'id'),
      type: ctx.prefixPN('asset.can-edit'),
      returnRaw: true,
    }),
  ]);

  if (userSession) {
    canEditPerms = await ctx.tx.call(
      'users.permissions.getAllItemsForTheUserAgentHasPermissionsByType',
      {
        userAgentId: userSession.userAgents,
        type: ctx.prefixPN('asset.can-edit'),
        ignoreOriginalTarget: true,
        item: map(assets, 'id'),
      }
    );
  }

  const currentPermissions = [...viewPerms, ...editPerms];

  const permissionsByItem = {};
  forEach(currentPermissions, (permission) => {
    if (!permissionsByItem[permission.item]) {
      permissionsByItem[permission.item] = {
        viewer: [],
        editor: [],
      };
    }
    const role = permission.type.includes('can-edit') ? 'editor' : 'viewer';
    permissionsByItem[permission.item][role].push(permission.permissionName);
  });

  // ·········································································
  // PERMISSIONS & PERSONS
  if (checkPermissions && userSession) {
    const classesPermissionsPerAsset = await getClassesPermissions({
      assetsIds: map(assets, 'id'),
      withInfo: true,
      ctx,
    });

    let permissions = [];

    if (userSession || showPublic) {
      permissions = await getPermissions({ assetsIds, showPublic, ctx });
    }

    const privateAssets = permissions.map((item) => item.asset);
    assets = assets.filter((asset) => privateAssets.includes(asset.id));

    const getUsersAssetIds = [];
    for (let i = 0, l = assets.length; i < l; i++) {
      const asset = assets[i];
      const classesWithPermissions = classesPermissionsPerAsset[i];
      asset.isPrivate = true;
      if (classesWithPermissions.length) {
        asset.isPrivate = false;
      }
      asset.classesCanAccess = classesWithPermissions;
      const permission = permissions.find((item) => item.asset === asset.id);
      if (!isEmpty(permission?.permissions)) {
        // const { permissions: userPermissions } = permission;
        // if (userPermissions.edit) {
        getUsersAssetIds.push(asset.id);
        // }
      }
    }

    if (getUsersAssetIds.length) {
      const rawUserAgents = await ctx.tx.call('users.permissions.findUsersWithPermissions', {
        permissions: {
          permissionName: map(getUsersAssetIds, getAssetPermissionName),
        },
        returnRaw: true,
      });
      const userAgentIds = uniq(map(rawUserAgents, 'userAgent'));
      // const userAgents = await getUserAgentsInfo(userAgentIds, { transacting });
      const userAgents = await ctx.tx.call('users.getUserAgentsInfo', {
        userAgentIds,
      });
      const userAgentsById = keyBy(userAgents, 'id');

      for (let i = 0, l = assets.length; i < l; i++) {
        const asset = assets[i];
        if (getUsersAssetIds.includes(asset.id)) {
          const permission = permissions.find((item) => item.asset === asset.id);
          const assetPermissionName = getAssetPermissionName({ assetId: asset.id, ctx });
          const { role: userRole } = permission;
          const rawPerm = filter(
            rawUserAgents,
            ({ permissionName }) => permissionName === assetPermissionName
          );
          const assetUserAgents = uniqBy(rawPerm, 'userAgent');

          let assetPermissions = [];
          forEach(assetUserAgents, (raw) => {
            const userAgent = userAgentsById[raw.userAgent];
            const perm = find(assetPermissions, { id: userAgent.user.id });
            if (perm) {
              perm.userAgentIds.push(userAgent.id);
              perm.permissions.push(raw.actionName);
            } else {
              assetPermissions.push({
                ...userAgent.user,
                userAgentIds: [userAgent.id],
                permissions: [raw.actionName],
              });
            }
          });
          assetPermissions = assetPermissions.map((user) => {
            const item = { ...user };
            item.editable = canUnassignRole({
              userRole,
              assignedUserCurrentRole: item.permissions[0],
              ctx,
            });
            return item;
          });
          assets[i].canAccess = assetPermissions;
          if (assets[i].canAccess?.length) {
            const noOwners = filter(
              assets[i].canAccess,
              (item) => !item.permissions?.includes('owner')
            );
            if (noOwners.length) {
              assets[i].isPrivate = false;
            }
          }

          const _permission = permissions.find((item) => item.asset === asset.id);
          if (!isEmpty(_permission?.permissions)) {
            const { permissions: userPermissions } = _permission;
            if (!userPermissions.edit) {
              const owner = find(assets[i].canAccess, (item) =>
                item.permissions?.includes('owner')
              );
              assets[i].canAccess = null;
              if (owner) {
                assets[i].canAccess = [owner];
              }
            }
          }
        }
      }
    }
  }

  // ·········································································
  // SUBJECT
  if (!isEmpty(assets) && withSubjects) {
    const assetsSubjects = await ctx.tx.db.AssetsSubjects.find({ asset: ids }).lean();

    const subjectsByAsset = groupBy(assetsSubjects, 'asset');

    assets = assets.map((asset) => {
      asset.subjects = subjectsByAsset[asset.id];
      return asset;
    });
  }

  // ·········································································
  // FILES
  if (!isEmpty(assets) && withFiles) {
    const assetsFiles = await ctx.tx.AssetsFiles.find({ asset: ids }).lean();
    const fileIds = compact(
      uniq(map(assetsFiles, 'file').concat(assets.map((asset) => asset.cover)))
    );

    // ES: En caso de que algún asset sea un Bookmark, entonces recuperamos el icono
    // EN: In case one asset is a Bookmark, then we recover the icon
    const bookmarks = await findBookmarks({ query: { asset_$in: ids }, ctx });
    const iconFiles = compact(uniq(map(bookmarks, 'icon')));
    fileIds.push(...iconFiles);

    const files = await ctx.tx.db.Files.find({ id: fileIds }).lean();

    assets = assets.map((asset) => {
      const items = assetsFiles
        .filter((assetFile) => assetFile.asset === asset.id)
        .map((assetFile) => find(files, { id: assetFile.file }));

      if (asset.cover) {
        asset.cover = find(files, { id: asset.cover });
      }

      const bookmark = find(bookmarks, { asset: asset.id });

      if (bookmark) {
        asset.url = bookmark.url;
        asset.icon = find(files, { id: bookmark.icon });
        asset.fileType = 'bookmark';
        asset.metadata = [];
      }

      if (!isEmpty(items)) {
        if (asset.cover) {
          asset.file =
            items.length > 1 ? items.filter((item) => item.id !== asset.cover) : items[0];
        } else {
          [asset.file] = items;
        }
      }

      return asset;
    });
  }

  // ·········································································
  // TAGS
  let tags = [];
  if (withTags) {
    tags = await Promise.all(
      assets.map((item) =>
        ctx.tx.call('common.tags.getValuesTags', {
          value: item.id,
          tags: ctx.prefixPN(''),
        })
      )
    );
  }

  // ·········································································
  // CATEGORY DATA
  let categories = [];
  let assetCategoryData = [];
  if (withCategory) {
    categories = await getCategories({
      categoriesIds: uniq(assets.map((item) => item.category)),
      ctx,
    });

    // CATEGORY ROVIDER DATA
    const providersResults = await Promise.all(
      categories.map((category) => {
        if (category.provider === 'leebrary') {
          return null;
        }

        // TODO Roberto: Hay que repensar esta lógica en la que se solicita los plugins Providers de un determinado plugin
        // Lanzo el error aposta
        throw new Error('TODO: HAY QUE REPENSAR LA LÓGICA DE LOS PROVIDERS');
        //! Dejo comentado el código "antiguo"
        // const categoryProvider = category.provider;
        //   const assetProviderService = leemons.getProvider(categoryProvider).services.assets;
        //   return assetProviderService.getByIds(
        //     assets
        //       .filter((item) => item.category === category.id)
        //       .map((item) => ({ ...item, category })),
        //     { userSession, transacting }
        //   );
      })
    );

    assetCategoryData = providersResults.flat();
  }

  // ·········································································
  // PINS DATA
  let pins = [];

  if (checkPins) {
    pins = await getPins({ assetsIds, ctx });
  }

  let programsById = {};
  const programIds = [];
  forEach(assets, (asset) => {
    if (asset.program) {
      programIds.push(asset.program);
    }
  });

  if (programIds.length) {
    const programs = await ctx.tx.call('academic-portfolio.programs.programsByIds', {
      ids: uniq(programIds),
      onlyProgram: true,
    });
    programsById = keyBy(programs, 'id');
  }
  // ·········································································
  // FINALLY

  const deleteRoles = ['owner'];
  const shareRoles = ['owner', 'editor'];
  const editRoles = ['owner', 'editor'];
  const assignRoles = ['owner', 'editor'];
  const userAgents = userSession?.userAgents.map(({ id }) => id) || [];

  const result = assets.map((asset, index) => {
    const item = { ...asset };

    if (item.program) {
      item.programName = programsById[item.program]?.name;
    }

    item.permissions = permissionsByItem[item.id] || { viewer: [], editor: [] };

    if (withCategory) {
      const { key, duplicable, assignable } = find(categories, { id: asset.category });
      item.duplicable = duplicable;
      item.assignable = assignable;
      item.downloadable = key === CATEGORIES.MEDIA_FILES;
      item.providerData = find(assetCategoryData, { asset: asset.id });
    }

    if (withTags) {
      [item.tags] = tags[index];
    }

    if (checkPins) {
      const pin = find(pins, { asset: asset.id });
      item.pinned = !isNil(pin?.id);
    }

    if (isArray(item.canAccess)) {
      item.editable = item.canAccess.some(
        (permission) =>
          intersection(permission.permissions, editRoles).length > 0 &&
          intersection(permission.userAgentIds, userAgents).length > 0
      );

      item.deleteable = item.canAccess.some(
        (permission) =>
          intersection(permission.permissions, deleteRoles).length > 0 &&
          intersection(permission.userAgentIds, userAgents).length > 0
      );

      item.shareable = item.canAccess.some(
        (permission) =>
          intersection(permission.permissions, shareRoles).length > 0 &&
          intersection(permission.userAgentIds, userAgents).length > 0
      );

      item.assignable = item.canAccess.some(
        (permission) =>
          intersection(permission.permissions, assignRoles).length > 0 &&
          intersection(permission.userAgentIds, userAgents).length > 0
      );

      item.role = 'viewer';
      if (
        item.canAccess.some(
          (permission) =>
            intersection(permission.permissions, ['editor']).length > 0 &&
            intersection(permission.userAgentIds, userAgents).length > 0
        )
      ) {
        item.role = 'editor';
      }

      if (
        item.canAccess.some(
          (permission) =>
            intersection(permission.permissions, ['owner']).length > 0 &&
            intersection(permission.userAgentIds, userAgents).length > 0
        )
      ) {
        item.role = 'owner';
      }
    }

    if (canEditPerms.includes(item.id)) {
      if (item.role !== 'owner') {
        item.role = 'editor';
        item.editable = editRoles.includes('editor');
        item.deleteable = deleteRoles.includes('editor');
        item.shareable = shareRoles.includes('editor');
        item.assignable = assignRoles.includes('editor');
      }
    }

    return item;
  });

  return result;
}

module.exports = { getByIds };