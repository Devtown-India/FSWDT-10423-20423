const express = require('express')
const fs = require('fs/promises')

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
    res.status(200).send('SErver is running')
})


app.get('/todos',async (req,res)=>{
    try {
        const todos = await fs.readFile('./db.json','utf-8')
        const parsedTodos = JSON.parse(todos)
        console.log(todos)
        res.status(200).json(parsedTodos)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})