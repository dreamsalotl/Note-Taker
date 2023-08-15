// Helper functions to read, write and append to files

const fs =  require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
/**
 * @param {string} destination
 * @param {object} content
 * @returns {Promise<void>}
 */

const writeFile = (destination, content) => 
    fs.writeFile(destination, JSON.stringify(content, null, 4), (err) => 
        err ? console.log(err) : console.log(`\nEntry added successfully, check ${destination} file\n`)
    );

/**
 * @param {string} file
 * @param {object} content
 * @returns {Promise<void>}
 */

const appendFile = (file, content) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if(err) throw err;
        const fileContent = JSON.parse(data);
        fileContent.push(content);
        writeFile(file, fileContent);
    });
};

module.exports = { readFile, writeFile, appendFile };