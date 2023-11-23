const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const os = require('os');
const prettier = require('prettier');

const { writeFile, readFile } = require('./files');
const { prettierOptions } = require('./prettierOptions');

/**
 * Prepares the schema file
 * @param {string} schemaPath - The path of the schema
 * @param {string} controller - The controller
 * @param {Object} schema - The schema
 * @throws {Error} If the schema has been manually modified.
 */
function prepareSchemaFile(schemaPath, controller, schema) {
  const schemaFilePath = path.join(schemaPath, `${controller}.js`);

  let schemaFile = null;
  try {
    schemaFile = readFile(schemaFilePath);
  } catch (error) {
    //
  }

  if (schemaFile) {
    const firstLine = schemaFile.split(os.EOL)[0];
    const hash = firstLine.split('// automatic hash: ')[1];
    const schemaContent = schemaFile.split(os.EOL).slice(1).join(os.EOL);
    const calculatedHash = crypto.createHash('sha256').update(schemaContent).digest('hex');

    if (hash !== calculatedHash) throw new Error('Schema has been manually modified');
  }

  const schemaContent = prettier.format(
    `const schema = ${JSON.stringify(schema, null, 4)};

    module.exports = {schema};
    `,
    prettierOptions
  );

  const calculatedHash = crypto.createHash('sha256').update(schemaContent).digest('hex');

  writeFile(
    schemaFilePath,
    `// automatic hash: ${calculatedHash}
${schemaContent}`
  );
}

/**
 * Prepares the openapi file
 * @param {string} controllerPath - The path of the controller
 * @param {string} service - The service
 * @param {string} controller - The controller
 * @param {Object} schema - The schema
 */

function prepareOpenapiFile(controllerPath, service, controller, schema) {
  const openapiPath = path.join(controllerPath, 'openapi', service);
  const schemaPath = path.join(openapiPath, 'schemas');
  if (!fs.existsSync(schemaPath)) {
    fs.mkdirSync(schemaPath, { recursive: true });
  }
  const openapiFilePath = path.join(openapiPath, `${controller}.js`);

  if (!fs.existsSync(openapiFilePath)) {
    const openapiContent = `const { schema } = require('./schemas/${controller}');

    const openapi = {
      // summary: "Summary",
      // description: "Description",
      responses: {
        200: {
          description: 'Success',
          content: {
            'application/json': {
              schema,
            },
          },
        },
      },
    };

    module.exports = {
      openapi,
    };
    `;
    writeFile(openapiFilePath, prettier.format(openapiContent, prettierOptions));
  }
  prepareSchemaFile(schemaPath, controller, schema);
}

module.exports = { prepareOpenapiFile };
