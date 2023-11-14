const _ = require('lodash');
const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const addKeywords = require('ajv-keywords');
const { localeRegex } = require('./validations/localeCode');

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);
addKeywords(ajv);

class LeemonsValidator {
  constructor(schema, options) {
    if (options) {
      const aj = new Ajv({ ...options, allErrors: true });
      addFormats(aj);
      this.validate = aj.compile(schema);
    } else {
      this.validate = ajv.compile(schema);
    }

    this.schema = schema;
  }

  get error() {
    const err = new Error(this.errorMessage);
    err.code = 422;
    return err;
  }

  get errorMessage() {
    return _.map(
      _.uniqBy(this.validate.errors, 'message'),
      (error) => `"${error.instancePath}": ${error.message}`
    ).join('\n');
  }

  get ajvError() {
    return this.validate.errors;
  }
}

// Validaciones de tipos custom
ajv.addFormat('localeCode', {
  validate: (x) => localeRegex.test(x),
});

LeemonsValidator.ajv = ajv;

module.exports = { LeemonsValidator };
