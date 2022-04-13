module.exports = {
  modelName: 'assets',
  collectionName: 'assets',
  options: {
    useTimestamps: true,
  },
  attributes: {
    name: {
      type: 'string',
      options: {
        notNull: true,
      },
    },
    description: {
      type: 'string',
    },
    color: {
      type: 'string',
    },
    cover: {
      references: {
        collection: 'plugins_leebrary::files',
      },
    },
    fromUser: {
      references: {
        collection: 'plugins_users::users',
      },
    },
    fromUserAgent: {
      references: {
        collection: 'plugins_users::user-agent',
      },
    },
    public: {
      type: 'boolean',
    },
    category: {
      references: {
        collection: 'plugins_leebrary::categories',
      },
    },
    indexable: {
      type: 'boolean',
      options: {
        defaultTo: true,
      },
    },
  },
  primaryKey: {
    type: 'uuid',
  },
};
