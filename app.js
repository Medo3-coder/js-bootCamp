// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// every time u start ur module start with ./

const names = require('./4-name');
const sayHi = require('./5-utiles');
const data = require('./6-alternative-flavor');
console.log(data);

sayHi('meme');
sayHi(names.john);
sayHi(names.mary);