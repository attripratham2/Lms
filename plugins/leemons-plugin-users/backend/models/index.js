/* eslint-disable global-require */

const { getKeyValueModel } = require('leemons-mongodb-helpers');

const models = {
  ...require('./actions'),
  ...require('./centerLimits'),
  ...require('./centers'),
  ...require('./config'),
  ...require('./groupRole'),
  ...require('./groupUserAgent'),
  ...require('./groups'),
  ...require('./itemPermissions'),
  ...require('./permissionAction'),
  ...require('./permissions'),
  ...require('./profileContacts'),
  ...require('./profileRole'),
  ...require('./profiles'),
  ...require('./roleCenter'),
  ...require('./rolePermission'),
  ...require('./roles'),
  ...require('./superAdminUser'),
  ...require('./userAgentContacts'),
  ...require('./userAgentPermission'),
  ...require('./userAgent'),
  ...require('./userPreferences'),
  ...require('./userProfile'),
  ...require('./userRecoverPassword'),
  ...require('./userRememberLogin'),
  ...require('./users'),
};

module.exports = {
  ...models,
  getServiceModels() {
    return {
      Actions: models.actionsModel,
      CenterLimits: models.centerLimitsModel,
      Centers: models.centersModel,
      Config: models.configModel,
      GroupRole: models.groupRoleModel,
      GroupUserAgent: models.groupUserAgentModel,
      Groups: models.groupsModel,
      ItemPermissions: models.itemPermissionsModel,
      PermissionAction: models.permissionActionModel,
      Permissions: models.permissionsModel,
      ProfileContacts: models.profileContactsModel,
      ProfileRole: models.profileRoleModel,
      Profiles: models.profilesModel,
      RoleCenter: models.roleCenterModel,
      RolePermission: models.rolePermissionModel,
      Roles: models.rolesModel,
      SuperAdminUser: models.superAdminUserModel,
      UserAgentContacts: models.userAgentContactsModel,
      UserAgentPermission: models.userAgentPermissionModel,
      UserAgent: models.userAgentModel,
      UserPreferences: models.userPreferencesModel,
      UserProfile: models.userProfileModel,
      UserRecoverPassword: models.userRecoverPasswordModel,
      UserRegisterPassword: models.userRegisterPasswordModel,
      UserRememberLogin: models.userRememberLoginModel,
      User: models.usersModel,
      KeyValue: getKeyValueModel({ modelName: 'v1::users_KeyValue' }),
    };
  },
};