const express = require('express')

const PORT = 8080
// expres instance
const app = express()

app.get('/',(req,res)=>{
    // console.log(req)
    const {headers,method,url,path,query} = req
    console.log({
        headers,
        method,
        url,
        path,
        query
    })
    res.send('Hello World')
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})