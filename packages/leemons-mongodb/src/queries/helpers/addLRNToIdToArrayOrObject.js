const _ = require('lodash');
const { ObjectId } = require('mongodb');
const { generateLRN } = require('leemons-lrn');
const { getLRNConfig } = require('./getLRNConfig');

function addLRNToIdToArrayOrObject({ items, modelKey, ctx }) {
  const config = getLRNConfig({ modelKey, ctx });
  if (_.isArray(items)) {
    return _.map(items, (item) => {
      item.id = generateLRN({ ...config, resourceID: new ObjectId() });
      return item;
    });
  }
  items.id = generateLRN({ ...config, resourceID: new ObjectId() });
  return items;
}

module.exports = { addLRNToIdToArrayOrObject };