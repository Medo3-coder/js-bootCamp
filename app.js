// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// every time u start ur module start with ./

const { readFileSync, writeFileSync } = require('fs');

const firstFile = readFileSync('./content/first.txt', 'utf8');
const secondFile = readFileSync('./content/second.txt', 'utf8');
console.log(firstFile, secondFile);

writeFileSync('./content/result-async.txt', `here is result : ${firstFile} ${secondFile}`, { flag: 'a' });