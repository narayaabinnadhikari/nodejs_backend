const fs = require('fs')
const path = require('path');


fs.readFile(path.join(__dirname, "some_files", 'starter.txt'), 'utf8', (err,data) => {
    if(err) throw err;
    console.log(data.toString());
})

console.log("Hello ...")

fs.writeFile(path.join(__dirname, "some_files", 'reply.txt'), 'Nice to meet you, One and Two.', (err) => {
    if(err) throw err;
    console.log("Writing completed. ✔✔");
})

fs.appendFile(path.join(__dirname, "some_files", 'appends.txt'), 'Nice to see append can create a new file.', (err) => {
    if(err) throw err;
    console.log("Append completed. ✔✔");
})

//exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`There was a uncaught error.: ${err}`);
    process.exit(1);
})