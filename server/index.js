const express = require('express')
const fs = require('fs/promises')

const PORT = 8080
// expres instance
const app = express()

const logger = async(req,res,next)=>{
    // do something
    const {headers,method,url,path,query} = req
    console.log({
        headers,
        method,
        url,
        path,
        query
    })
next()
}

app.use(logger)


app.get('/',(req,res)=>{
    // console.log(req)
   
    res.status(200).send('SErver is running')
})


app.get('/todos',async (req,res)=>{
    try {
        const {count=10} = req.query
        const todos = await fs.readFile('./db.json','utf-8')
        const parsedTodos = JSON.parse(todos)
        res.status(200).json(parsedTodos.slice(0,count))
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})