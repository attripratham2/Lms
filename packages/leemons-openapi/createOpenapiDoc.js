require('dotenv').config();

const axios = require('axios');
const fs = require('fs');
const path = require('path');
const UglifyJS = require('uglify-js');
const espree = require('espree');
const estraverse = require('estraverse');

/**
 * Reads a file and returns its content.
 * @param {string} filePath - The path of the file to read.
 * @returns {string} The content of the file.
 */
function readFile(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    return '';
  }
}

/**
 * Extracts required variables from a piece of code.
 * @param {string} code - The code to extract required variables from.
 * @returns {Object} An object containing the required variables.
 */
function extractRequiredVariables(code) {
  const requires = code.match(/const\s*({\s*([^}]+)\s*}|[^=]+)\s*= require\(['"]([^'"]+)['"]\)/g);
  const requiredVariables = {};

  if (!requires) {
    return {};
  }

  requires.forEach((req) => {
    const variableNameMatch = req.match(
      /const\s*({\s*([^}]+)\s*}|[^=]+)\s*= require\(['"]([^'"]+)['"]\)/
    );
    let variableName = variableNameMatch[1] ? variableNameMatch[1] : variableNameMatch[2];
    const importedFile = variableNameMatch[3];
    if (importedFile.includes('.')) {
      if (variableName.includes(':')) {
        [variableName] = variableName.split(':');
      }

      variableName
        .replace('{', '')
        .replace('}', '')
        .split(',')
        .forEach((el) => {
          requiredVariables[el.trim()] = importedFile;
        });
    }
  });
  return requiredVariables;
}

/**
 * Finds a controller node in an Abstract Syntax Tree (AST).
 * @param {Object} ast - The AST to search in.
 * @param {string} controllerName - The name of the controller to find.
 * @returns {Object} The controller node.
 */
function findControllerNode(ast, controllerName) {
  let controllerNode = null;
  estraverse.traverse(ast, {
    enter(node) {
      if (node.type === 'Property' && node.key.name === controllerName) {
        controllerNode = node;
        this.break();
      }
    },
  });
  return controllerNode;
}

/**
 * Finds the real required variables in a father node.
 * @param {Object} fatherNode - The node to search in.
 * @param {Object} requiredVariables - The required variables to find.
 * @returns {Object} The real required variables.
 */
function findRealRequired(fatherNode, requiredVariables) {
  const variables = Object.keys(requiredVariables);
  const realRequired = {};
  estraverse.traverse(fatherNode, {
    enter(node) {
      if (node.type === 'CallExpression') {
        if (variables.includes(node.callee.name)) {
          realRequired[node.callee.name] = requiredVariables[node.callee.name];
        } else if (
          node.callee.type === 'MemberExpression' &&
          variables.includes(node.callee.object.name)
        ) {
          realRequired[node.callee.object.name] = requiredVariables[node.callee.object.name];
        }
      }
    },
  });
  return realRequired;
}

/**
 * Finds a function in a controller.
 * @param {string} filePath - The path of the file to search in.
 * @param {string} controllerName - The name of the controller to find.
 * @returns {Object} The found function.
 */
function findFunctionInController(filePath, controllerName) {
  // Read the source code of the file
  const code = fs.readFileSync(filePath, 'utf8');

  // Find all require calls and extract variable names
  const requiredVariables = extractRequiredVariables(code);

  // Parse the source code into an AST
  const ast = espree.parse(code, {
    // Parsing options
    ecmaVersion: 2020,
    sourceType: 'module',
  });

  // Variable to store the found node
  const controllerNode = findControllerNode(ast, controllerName);

  if (!controllerNode) {
    console.warn(`Openapi: Controller "${controllerName}" not found in "${filePath}"`);
    return [];
  }

  const realRequired = findRealRequired(controllerNode, requiredVariables);

  return { ...realRequired };
}

/**
 * Finds and reads a file.
 * @param {string} filePath - The path of the file to find and read.
 * @returns {Array} An array containing the file path and its content.
 */
function findAndReadFile(filePath) {
  try {
    if (fs.lstatSync(filePath, { throwIfNoEntry: false })?.isDirectory()) {
      // si es un directorio debería ser un index.js
      return findAndReadFile(path.join(filePath, 'index.js')) || '';
    }
    // si no es un directorio debe ser un archivo y debe acabar en .js
    // sino acaba en .js se lo añadimos
    if (
      !filePath.endsWith('.js') &&
      !filePath.endsWith('transform.js') &&
      !filePath.includes('rest/openapi/')
    ) {
      let _filePath = '';
      if (filePath.endsWith('/')) _filePath = filePath.replace('/', '.js');
      else _filePath = `${filePath}.js`;
      if (fs.existsSync(_filePath)) {
        return [_filePath, readFile(_filePath)];
      }
      // si tampoco es un archivo probamos a quitarle la última parte de la ruta y ver si eso es un directorio
      return findAndReadFile(path.join(filePath, '..', 'index.js'));
    }
    return [filePath, readFile(filePath)];
  } catch (error) {
    console.error('Openapi: findAndReadFile Error:', error);
    return [filePath, ''];
  }
}

/**
 * Minimizes and concatenates files.
 * @param {Array} codeContext - The context of the code.
 * @param {string} filePath - The path of the file to minimize and concatenate.
 * @param {string} fileContent - The content of the file to minimize and concatenate.
 * @param {Set} concatenatedFiles - The set of already concatenated files.
 * @returns {Object} An object containing the new code context and the set of concatenated files.
 */
function minimizeAndConcatenateFiles(codeContext, filePath, fileContent, concatenatedFiles) {
  if (!concatenatedFiles.has(filePath)) {
    const minimizedContent = UglifyJS.minify(fileContent, { keep_fnames: true });
    concatenatedFiles.add(filePath);
    codeContext.push(filePath, minimizedContent);
  }
  return { codeContext, concatenatedFiles };
}

/**
 * Gets the real required files.
 * @param {string} fileContent - The content of the file.
 * @param {string} filePath - The path of the file.
 * @param {Object} requires - The required variables.
 * @param {string} variableRequired - The required variable.
 * @returns {Object} The real required files.
 */
function getRealRequires(fileContent, filePath, requires, variableRequired) {
  const ast = espree.parse(fileContent, { ecmaVersion: 2020 });
  let functionNode;
  let realRequires = {};

  estraverse.traverse(ast, {
    enter(node) {
      // Si el nodo es una declaración de función y su nombre es el nombre de la variable requerida
      if (node.type === 'FunctionDeclaration' && node.id.name === variableRequired) {
        functionNode = node;
        this.break(); // Detener la búsqueda
      }
    },
  });

  if (!functionNode) {
    // si no podemos encontrar la declaración que buscamos, no podemos filtrar los requires
    if (path.basename(filePath) === 'index.js') {
      // vemos a ver si alguno de lo requires es como la variable
      // Check if any of the requires matches the variable
      const matchingVariables = Object.keys(requires).filter(
        (variable) => variable === variableRequired
      );

      if (matchingVariables.length > 0) {
        matchingVariables.forEach((variable) => {
          realRequires[variable] = requires[variable];
        });
      } else {
        // no hay ninguna variable que coincida... me traigo todas...
        console.log(
          'EN EL INDEX NO ENCUENTRO LA VARIABLE QUE QUIERO... ME TRAIGO TODO',
          666666,
          variableRequired,
          filePath
        );
        realRequires = requires;
      }
    } else {
      // no hay ninguna variable que coincida... me traigo todas...
      console.log(
        'EN EL ARCHIVO NO ENCUENTRO LA DECLARACIÓN DE FUNCIÓN QUE QUIERO... ME TRAIGO TODO',
        666666,
        variableRequired,
        filePath
      );
      realRequires = requires;
    }
  } else {
    // recorremos los nodos de la variable para filtrar los requires que se llaman desde esa variable
    estraverse.traverse(functionNode, {
      enter(node) {
        if (node.type === 'CallExpression' && requires[node.callee.name]) {
          realRequires[node.callee.name] = requires[node.callee.name];
        }
      },
    });
  }
  return realRequires;
}

/**
 * Gets the required files.
 * @param {string} filePath - The path of the file.
 * @param {string} variableRequired - The required variable.
 * @param {Set} _concatenatedFiles - The set of already concatenated files.
 * @returns {Array} The required files.
 */
function getRequiredFiles(filePath, variableRequired, _concatenatedFiles = new Set()) {
  let concatenatedFiles = _concatenatedFiles;

  const [_filePath, fileContent] = findAndReadFile(filePath);
  const requires = extractRequiredVariables(fileContent);

  let codeContext = [];

  ({ codeContext, concatenatedFiles } = minimizeAndConcatenateFiles(
    codeContext,
    _filePath,
    fileContent,
    concatenatedFiles
  ));

  const realRequires = getRealRequires(fileContent, _filePath, requires, variableRequired);
  console.log('REAL REQUIRES', realRequires);

  Object.entries(realRequires).forEach(([matchingVariable, matchingPath]) => {
    const requiredPath = path.join(path.dirname(_filePath), matchingPath);
    if (!concatenatedFiles.has(requiredPath)) {
      const content = getRequiredFiles(requiredPath, matchingVariable, concatenatedFiles);
      if (content) {
        codeContext = [...codeContext, ...content];
      }
    }
  });

  return codeContext;
}

/**
 * Creates a code context.
 * @param {string} filePath - The path of the file.
 * @param {string} controllerName - The name of the controller.
 * @returns {string} The code context.
 */
function createCodeContext(filePath, controllerName) {
  const controllerRequires = findFunctionInController(filePath, controllerName);

  let concatenatedFiles = new Set();
  let codeContext = [];
  ({ codeContext, concatenatedFiles } = minimizeAndConcatenateFiles(
    codeContext,
    filePath,
    readFile(filePath),
    concatenatedFiles
  ));

  Object.keys(controllerRequires).forEach((variableRequired) => {
    const requirePath = controllerRequires[variableRequired];
    const requiredFilesContext = getRequiredFiles(
      path.join(filePath, '..', requirePath),
      variableRequired,
      concatenatedFiles
    );

    codeContext = [...codeContext, ...requiredFilesContext];
  });

  return codeContext.join('\n');
}

/**
 * Calls the OpenAI API.
 * @param {string} systemMessage - The system message to send.
 * @param {string} userMessage - The user message to send.
 * @returns {Promise<string>} The response from the OpenAI API.
 */
async function callOpenAI(systemMessage, userMessage) {
  const messages = [
    { role: 'user', content: userMessage },
    { role: 'system', content: systemMessage },
  ];

  const response = await axios.post(
    process.env.APIURL_OPENAI,
    {
      model: 'gpt-3.5-turbo-16k',
      messages,
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.APIKEY_OPENAI}`,
        'Content-Type': 'application/json',
      },
    }
  );
  return response.data.choices[0].message.content.replace('```json', '').replace('```', '');
}

/**
 * Creates an OpenAPI document.
 * @param {string} service - The service to create the document for.
 * @param {string} controller - The controller to create the document for.
 * @param {string} controllerFile - The file of the controller.
 * @returns {Promise<Object>} The created OpenAPI document.
 */
async function createOpenapiDoc(service, controller, controllerFile) {
  const systemMessage = `Respond as if you were an expert in REST APIs for JavaScript using the Moleculer framework.Return a valid JSON object with only 'summary' and 'description' properties that can be used to document, using OpenAPI specifications, what the handler of the '${controller}' property does in the '${controllerFile}' file, which is an action in the Moleculer JavaScript framework.
I want 'summary' only have a short resume of what the controller does. Don't start it with "This handler" or "This Endpoint", only the summary.
I want the description to be in markdown format and contain the following information (each point should be clearly separated into a different paragraph):
* Short detailed description of what the handler does. It should always start with "This endpoint" and should not contain information about the parameters it receives and the response it returns, only what is expected to be done.
* Authentication: Information about whether the user needs to be logged in to use the endpoint. It should start with '**Authentication:**"
* Permissions: Information about the permissions required for the user to use the endpoint. It should start with "**Permissions:**"
* Fully detailed description of what the controller handler, and the methods it calls, does.
`;

  const userMessage = createCodeContext(controllerFile, controller);

  let responseObj = {};

  let AIResponse = null;
  try {
    const messages = [
      { role: 'user', content: userMessage },
      { role: 'system', content: systemMessage },
    ];
    console.info('Sending message to OpenAI', JSON.stringify(messages).length, 'Characters');
    AIResponse = await callOpenAI(systemMessage, userMessage);
    console.info('OpenAI Response', AIResponse);

    try {
      const response = JSON.parse(AIResponse.replace(/`/g, '\\`'));
      responseObj = {
        summary: response.summary,
        description: response.description,
        AIGenerated: true,
      };
    } catch (error) {
      responseObj = { description: AIResponse, AIGenerated: true };
    }
  } catch (error) {
    console.warn('Openapi: OpenAI Error', error);
  }
  const requestFolder = path.resolve(__dirname, 'requests');

  if (!fs.existsSync(requestFolder)) {
    fs.mkdirSync(requestFolder);
  }

  fs.writeFileSync(
    path.resolve(requestFolder, `${service}-${controller}.request.txt`),
    JSON.stringify({ systemMessage, userMessage, response: responseObj }, null, 2)
  );

  return responseObj;
}

module.exports = { createOpenapiDoc };
