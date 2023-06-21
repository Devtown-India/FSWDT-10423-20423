const fs = require('fs');

const data = "Hello world"

fs.writeFile('test.txt',data,(err)=>{
    if(err) throw err;
    console.log('File written to...');
})

console.log('next')