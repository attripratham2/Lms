const { set } = require('lodash');

module.exports = async function assignAsset({ assignable, instance, ctx }) {
  set(assignable, 'asset.indexable', false);

  const createdAssignable = await ctx.tx.call('assignables.assignables.createAssignable', {
    assignable,
    published: true,
  });

  const assignableId = createdAssignable.id;

  return ctx.tx.call('assignables.assignableInstances.createAssignableInstance', {
    assignableInstance: {
      assignable: assignableId,
      ...instance,
    },
  });
};
