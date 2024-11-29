// const fs = require('fs')
const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async() =>{  
    try {
        const data = await fsPromises.readFile(path.join(__dirname, "some_files", 'starter.txt'), 'utf8');
        console.log(data);
    } catch (err) {
        console.error(err)
    }
}

fileOps();
// fs.readFile(path.join(__dirname, "some_files", 'starter.txt'), 'utf8', (err,data) => {
//     if(err) throw err;
//     console.log(data.toString());
// })

// fs.writeFile(path.join(__dirname, "some_files", 'reply.txt'), 'Nice to meet you, One and Two.', (err) => {
//     if(err) throw err;
//     console.log("Writing completed. ✔✔");
// })

// fs.appendFile(path.join(__dirname, "some_files", 'appends.txt'), 'Nice to see append can create a new file.', (err) => {
//     if(err) throw err;
//     console.log("Append completed. ✔✔");
// })



//A better way is to put append inside write as below.
// fs.writeFile(path.join(__dirname, "some_files", 'writings.txt'), 'Nice to meet you, One and Two.', (err) => {
//     if(err) throw err;
//     console.log("Writing completed. ✔✔");

//     fs.appendFile(path.join(__dirname, "some_files", 'writings.txt'), '\n\nNice to see append can create a new file if there is no file.', (err) => {
//         if(err) throw err;
//         console.log("Append completed. ✔✔");

//         fs.rename(path.join(__dirname, "some_files", 'writings.txt'), path.join(__dirname, "some_files", 'newreply.txt'), (err) => {
//             if(err) throw err;
//             console.log("Renaming complete. 🍾 🍾 ");
//         })
//     })
// })



//exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`There was a uncaught error.: ${err}`);
    process.exit(1);
})