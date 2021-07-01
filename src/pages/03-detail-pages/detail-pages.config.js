/**
 *  detail-pages.config.js 
 * 
 *  Adds the global data to the view collection's default context.
 * 
 */

const path = require('path');
const extend = require('extend');
const fs = require('fs');

function createContextObject(dataPath) {
    let context = {};

    // Does the data folder exist?
    if (fs.existsSync(dataPath)) {
        
        // Find only the JSON files in the dataPath directory.
        const jsonFiles = fs.readdirSync(dataPath).filter((file) => {
            return path.extname(file) === '.json';
        });
    
        jsonFiles.forEach((file) => {
            const pathToJSONfile = path.join(dataPath, file);
            const fileBaseName = path.basename(file, '.json');
    
            // Store globally scoped variables in Handlebars accessible object
            context[fileBaseName] = JSON.parse(fs.readFileSync(pathToJSONfile, 'utf8'));
        });
    }

    return context;
}

// Automatically create the context based upon the global files
const globalDataPath = path.join(`${__dirname}`, '..', '/_global-data/');

// Create an object from the global context
const globalContext = createContextObject(globalDataPath);

module.exports = {
    context: { global: globalContext },
    status: "wip",
    preview: './src/pages/_layouts/default.hbs'
};
