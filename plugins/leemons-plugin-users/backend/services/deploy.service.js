/**
 * @typedef {import('moleculer').ServiceSchema} ServiceSchema Moleculer's Service Schema
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

const path = require('path');
const { LeemonsCacheMixin } = require('leemons-cache');
const { LeemonsMongoDBMixin, mongoose } = require('leemons-mongodb');
const { LeemonsDeploymentManagerMixin } = require('leemons-deployment-manager');
const { addLocalesDeploy } = require('leemons-multilanguage');
const { hasKey, setKey } = require('leemons-mongodb-helpers');
const { addPermissionsDeploy } = require('leemons-permissions');
const { addMenuItemsDeploy } = require('leemons-menu-builder');
const { getServiceModels } = require('../models');
const { addMany } = require('../core/actions');
const { defaultActions, defaultPermissions, menuItems } = require('../config/constants');
const {
  createInitialProfiles,
} = require('../core/profiles/createInitialProfiles/createInitialProfiles');

/** @type {ServiceSchema} */
module.exports = {
  name: 'users.deploy',
  version: 1,
  mixins: [
    LeemonsCacheMixin(),
    LeemonsMongoDBMixin({
      models: getServiceModels(),
    }),
    LeemonsDeploymentManagerMixin(),
  ],
  events: {
    'deployment-manager.install': async (ctx) => {
      // Actions
      if (!(await hasKey(ctx.tx.db.KeyValue, `actions`))) {
        await addMany({ data: defaultActions, ctx });
        await setKey(ctx.tx.db.KeyValue, `actions`);
      }
      ctx.tx.emit('init-actions');
      // Permissions
      await addPermissionsDeploy({
        keyValueModel: ctx.tx.db.KeyValue,
        permissions: defaultPermissions,
        ctx,
      });
      // Locales
      await addLocalesDeploy({
        keyValueModel: ctx.tx.db.KeyValue,
        locale: ['es', 'en'],
        i18nPath: path.resolve(__dirname, `../i18n/`),
        ctx,
      });
    },
    'menu-builder.init-main-menu': async (ctx) => {
      const [mainMenuItem, ...otherMenuItems] = menuItems;
      await addMenuItemsDeploy({
        keyValueModel: ctx.tx.db.KeyValue,
        item: mainMenuItem,
        ctx,
      });
      ctx.tx.emit('init-menu');
      await addMenuItemsDeploy({
        keyValueModel: ctx.tx.db.KeyValue,
        item: otherMenuItems,
        ctx,
      });
      ctx.tx.emit('init-submenu');
    },
    'users.change-platform-locale': async (ctx) => {
      await createInitialProfiles({ ctx });
    },
    'multilanguage.newLocale': async (ctx) => {
      await addLocalesDeploy({
        keyValueModel: ctx.tx.db.KeyValue,
        locale: ctx.params.code,
        i18nPath: path.resolve(__dirname, `../i18n/`),
        ctx,
      });
      return null;
    },
  },
  async created() {
    mongoose.connect(process.env.MONGO_URI);
  },
};
