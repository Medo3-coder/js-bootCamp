// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// every time u start ur module start with ./

const names = require('./4- name');
const sayHi = require('./5- utiles');

console.log(names);
sayHi('meme');
sayHi(names.john);
sayHi(names.mary);