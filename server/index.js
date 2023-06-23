const express = require('express')

const PORT = 8080
// expres instance
const app = express()

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})