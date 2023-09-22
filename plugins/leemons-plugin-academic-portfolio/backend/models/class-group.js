const { mongoose, newModel } = require('@leemons/mongodb');

const schema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    deploymentID: {
      type: String,
      required: true,
      index: true,
    },
    class: {
      type: String,
      // ref: 'plugins_academic-portfolio::class',
    },
    group: {
      type: String,
      // ref: 'plugins_academic-portfolio::groups',
    },
  },
  {
    timestamps: true,
  }
);

const classGroupModel = newModel(mongoose.connection, 'v1::academic-portfolio_ClassGroup', schema);

module.exports = { classGroupModel };