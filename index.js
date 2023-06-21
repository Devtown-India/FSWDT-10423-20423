const fs = require('fs');

// const data = "Hello world"

// fs.writeFile('test.txt',data,(err)=>{
//     if(err) throw err;
//     console.log('File written to...');
// })

// console.log('next')

const data = fs.readFileSync('test.txt',{encoding:'utf8'})
fs.readFile('test.txt',{encoding:'utf8'},(err,data)=>{
    if(err) throw err;
    console.log(data,'async')
})
console.log(data,'sync')