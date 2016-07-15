const CURRENT_DIRECTORY = __dirname;

// filesystem module
var fs = require('fs');

// markdown-extractor module
var mdext = require(CURRENT_DIRECTORY + '/../index.js');

// get content in nodejs.md
var content = fs.readFileSync(CURRENT_DIRECTORY + '/assets/md/nodejs.md').toString();

console.log('Headings: ', mdext.getHeadings(content));