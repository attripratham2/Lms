const _ = require('lodash');
const { LeemonsError } = require('leemons-error');
const { validateTypePrefix } = require('../../validation/validate');

async function removeAllTagsForValues({ type, values, ctx }) {
  validateTypePrefix({ type, calledFrom: ctx.callerPlugin, ctx });
  // Validate values
  if (!values?.length || (_.isArray(values) && !_.every(values, _.isString))) {
    throw new LeemonsError(ctx, { message: `Values cannot be empty.` });
  }
  let _values = _.isArray(values) ? values : [values];
  _values = _.map(_values, (value) => JSON.stringify(value));
  return ctx.tx.db.Tags.deleteMany({ type, value: _values });
}

module.exports = { removeAllTagsForValues };
