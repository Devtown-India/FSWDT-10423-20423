const express = require("express");
const fs = require("fs/promises");
const uuid = require("uuid");

const PORT = 8080;
// expres instance
const app = express();

app.get('/todo/:id',(req,res)=>{
  const {name} = req.params;
  res.send(`Hello ${name}`)
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
