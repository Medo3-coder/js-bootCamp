const os = require('os');

//built in modules :  os path fs http   
// info about user start

const user = os.userInfo();

console.log(user);


// return system uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`);

const currentOS = {

    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    platform: os.platform(),

}

console.log(currentOS);