const ApiGateway = require('moleculer-web');
const { LeemonsDeploymentManagerMixin } = require('leemons-deployment-manager');

/**
 * @typedef {import('moleculer').ServiceSchema} ServiceSchema Moleculer's Service Schema
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 * @typedef {import('http').IncomingMessage} IncomingRequest Incoming HTTP Request
 * @typedef {import('http').ServerResponse} ServerResponse HTTP Server Response
 * @typedef {import('moleculer-web').ApiSettingsSchema} ApiSettingsSchema API Setting Schema
 */
// ad
module.exports = {
  name: 'gateway',
  mixins: [ApiGateway, LeemonsDeploymentManagerMixin({ checkIfCanCallMe: false })],

  /** @type {ApiSettingsSchema} More info about settings: https://moleculer.services/docs/0.14/moleculer-web.html */
  settings: {
    cors: {
      origin: '*',
    },
    // Exposed port
    port: process.env.PORT || 3000,

    // Exposed IP
    ip: '0.0.0.0',

    // Global Express middlewares. More info: https://moleculer.services/docs/0.14/moleculer-web.html#Middlewares
    use: [],

    routes: [
      {
        path: '/api',

        whitelist: ['**'],

        // Route-level Express middlewares. More info: https://moleculer.services/docs/0.14/moleculer-web.html#Middlewares
        use: [],

        // Enable/disable parameter merging method. More info: https://moleculer.services/docs/0.14/moleculer-web.html#Disable-merging
        mergeParams: true,

        // Enable authentication. Implement the logic into `authenticate` method. More info: https://moleculer.services/docs/0.14/moleculer-web.html#Authentication
        authentication: true,

        // Enable authorization. Implement the logic into `authorize` method. More info: https://moleculer.services/docs/0.14/moleculer-web.html#Authorization
        authorization: false,

        // The auto-alias feature allows you to declare your route alias directly in your services.
        // The gateway will dynamically build the full routes from service schema.
        autoAliases: true,

        aliases: {
          // -- Multilanguage (Finish) --
          'POST multilanguage/common': 'v1.multilanguage.common.getRest',
          'POST multilanguage/common/logged': 'v1.multilanguage.common.getLoggedRest',
          'POST multilanguage/locale': 'v1.multilanguage.locales.addRest',
          'GET multilanguage/locales': 'v1.multilanguage.locales.getRest',

          // -- Users --
          'GET users/platform/theme': 'v1.users.platform.getThemeRest',
          'GET users/user': 'v1.users.users.detailRest',
          'POST users/user/login': 'v1.users.users.loginRest',
          'GET users/user/profile': 'v1.users.users.profilesRest',
          'GET users/user/centers': 'v1.users.users.centersRest',

          // -- Admin (Finish) --
          'GET admin/i18n/:page/:lang': 'v1.admin.i18n.getLangRest',
          'GET admin/settings': 'v1.admin.settings.findOneRest',
          'POST admin/settings/languages': 'v1.admin.settings.setLanguagesRest',
          'GET admin/settings/languages': 'v1.admin.settings.getLanguagesRest',
          'POST admin/settings/signup': 'v1.admin.settings.signupRest',
          'POST admin/settings': 'v1.admin.settings.updateRest',
          'GET admin/mail/providers': 'v1.admin.mail.getProvidersRest',
          'GET admin/mail/platform': 'v1.admin.mail.getPlatformEmailRest',
          'POST admin/mail/platform': 'v1.admin.mail.savePlatformEmailRest',
          'GET admin/organization': 'v1.admin.organization.getRest',
          'POST admin/organization': 'v1.admin.organization.postRest',
          'GET admin/organization/jsonTheme': 'v1.admin.organization.getJsonThemeRest',

          // -- Emails (Finish) --
          'GET emails/providers': 'v1.emails.email.providersRest',
          'POST emails/send-test': 'v1.emails.email.sendTestRest',
          'POST emails/send-custom-test': 'v1.emails.email.sendCustomTestRest',
          'POST emails/save-provider': 'v1.emails.email.saveProviderRest',
          'POST emails/remove-provider': 'v1.emails.email.removeProviderRest',
          'GET emails/config': 'v1.emails.config.getConfigRest',
          'POST emails/config': 'v1.emails.config.saveConfigRest',

          // -- Menu builder (Finish) --
          'GET menu-builder/know-how-to-use': 'v1.menu-builder.menu.getIfKnowHowToUseRest',
          'POST menu-builder/know-how-to-use': 'v1.menu-builder.menu.setKnowHowToUseRest',
          'GET menu-builder/menu/:menuKey': 'v1.menu-builder.menu.getIfHasPermissionRest',
          'POST menu-builder/menu/:menuKey/add-item': 'v1.menu-builder.menu.addCustomForUserRest',
          'POST menu-builder/menu/:menuKey/re-order':
            'v1.menu-builder.menu.reOrderCustomUserItemsRest',
          'DELETE menu-builder/menu/:menuKey/:key': 'v1.menu-builder.menu.removeCustomForUserRest',
          'POST menu-builder/menu/:menuKey/:key': 'v1.menu-builder.menu.updateCustomForUserRest',

          // -- Widgets (Finish) --
          'GET widgets/zone/:key': 'v1.widgets.widgets.getZoneRest',
        },

        /**
				 * Before call hook. You can check the request.
				 * @param {Context} ctx
				 * @param {Object} route
				 * @param {IncomingRequest} req
				 * @param {ServerResponse} res
				 * @param {Object} data
				 *
				onBeforeCall(ctx, route, req, res) {
					// Set request headers to context meta
					ctx.meta.userAgent = req.headers["user-agent"];
				}, */

        /**
				 * After call hook. You can modify the data.
				 * @param {Context} ctx
				 * @param {Object} route
				 * @param {IncomingRequest} req
				 * @param {ServerResponse} res
				 * @param {Object} data
				onAfterCall(ctx, route, req, res, data) {
					// Async function which return with Promise
					return doSomething(ctx, res, data);
				}, */

        onError(req, res, err) {
          const response = { ...err, message: err.message };
          res.setHeader('Content-Type', 'application/json');
          res.writeHead(err.httpStatusCode || 500);
          res.end(JSON.stringify(response));
        },

        // Calling options. More info: https://moleculer.services/docs/0.14/moleculer-web.html#Calling-options
        callingOptions: {},

        bodyParsers: {
          json: {
            strict: false,
            limit: '1MB',
          },
          urlencoded: {
            extended: true,
            limit: '1MB',
          },
        },

        // Mapping policy setting. More info: https://moleculer.services/docs/0.14/moleculer-web.html#Mapping-policy
        mappingPolicy: 'all', // Available values: "all", "restrict"

        // Enable/disable logging
        logging: true,
      },
    ],

    // Do not log client side errors (does not log an error response when the error.code is 400<=X<500)
    log4XXResponses: true,
    // Logging the request parameters. Set to any log level to enable it. E.g. "info"
    logRequestParams: null,
    // Logging the response data. Set to any log level to enable it. E.g. "info"
    logResponseData: null,

    // Serve assets from "public" folder. More info: https://moleculer.services/docs/0.14/moleculer-web.html#Serve-static-files
    assets: {
      folder: 'public',

      // Options to `server-static` module
      options: {},
    },
  },

  methods: {
    /**
     * Authenticate the request. It check the `Authorization` token value in the request header.
     * Check the token value & resolve the user by the token.
     * The resolved user will be available in `ctx.meta.user`
     *
     * PLEASE NOTE, IT'S JUST AN EXAMPLE IMPLEMENTATION. DO NOT USE IN PRODUCTION!
     *
     * @param {Context} ctx
     * @param {Object} route
     * @param {IncomingRequest} req
     * @returns {Promise}
     */
    async authenticate(ctx, route, req) {
      let { authorization } = req.headers;
      if (!authorization) authorization = req.query.authorization;
      try {
        authorization = JSON.parse(authorization);
      } catch (e) {
        // Nothing
      }
      ctx.meta.authorization = authorization;
    },

    /**
     * Authorize the request. Check that the authenticated user has right to access the resource.
     *
     * PLEASE NOTE, IT'S JUST AN EXAMPLE IMPLEMENTATION. DO NOT USE IN PRODUCTION!
     *
     * @param {Context} ctx
     * @param {Object} route
     * @param {IncomingRequest} req
     * @returns {Promise}
     */
    async authorize(ctx, route, req) {
      // Get the authenticated user.
      const { user } = ctx.meta;

      // It check the `auth` property in action schema.
      if (req.$action.auth == 'required' && !user) {
        throw new ApiGateway.Errors.UnAuthorizedError('NO_RIGHTS');
      }
    },
  },
};
