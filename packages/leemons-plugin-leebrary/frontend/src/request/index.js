import removeFile from './removeFile';
import uploadFiles from './uploadFiles';
import listAllMyFiles from './listAllMyFiles';
import listCategories from './listCategories';
import newAsset from './newAsset';
import getAsset from './getAsset';
import duplicateAsset from './duplicateAsset';
import deleteAsset from './deleteAsset';
import getAssets from './getAssets';
import getAssetsByIds from './getAssetsByIds';
import setPermissions from './setPermissions';
import getUrlMetadata from './getUrlMetadata';
import updateAsset from './updateAsset';
import getAssetTypes from './getAssetTypes';
import pinAsset from './pinAsset';
import unpinAsset from './unpinAsset';

export const removeFileRequest = removeFile;
export const uploadFilesRequest = uploadFiles;
export const listAllMyFilesRequest = listAllMyFiles;
export const listCategoriesRequest = listCategories;
export const newAssetRequest = newAsset;
export const getAssetRequest = getAsset;
export const getAssetsRequest = getAssets;
export const getAssetsByIdsRequest = getAssetsByIds;
export const setPermissionsRequest = setPermissions;
export const getUrlMetadataRequest = getUrlMetadata;
export const duplicateAssetRequest = duplicateAsset;
export const deleteAssetRequest = deleteAsset;
export const updateAssetRequest = updateAsset;
export const getAssetTypesRequest = getAssetTypes;
export const pinAssetRequest = pinAsset;
export const unpinAssetRequest = unpinAsset;
