const fs = require('fs');

// // const data = "Hello world"

// // fs.writeFile('test.txt',data,(err)=>{
// //     if(err) throw err;
// //     console.log('File written to...');
// // })

// // console.log('next')

// const data = fs.readFileSync('test.txt',{encoding:'utf8'})
// fs.readFile('test.txt',{encoding:'utf8'},(err,data)=>{
//     if(err) throw err;
//     console.log(data,'async')
// })
// console.log(data,'sync')


const createFile = (data,name)=>{
    try{
        fs.writeFileSync(name,data)
        console.log('File written to...')
    }catch(err){
        console.log(err)
    }
}

createFile('Hello  again world','tes2t.txt')