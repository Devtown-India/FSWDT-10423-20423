const fs = require("fs/promises");
const { isAuthorised } = require("../middlewares");
const uuid =require('uuid')

const router = require("express").Router();

router.get("/", isAuthorised, async (req, res) => {
    try {
        const { user } = req;
        const todos = await fs.readFile("./db/todos.json", "utf8");
        const parsedTodos = JSON.parse(todos);
        return res.json({
            data: parsedTodos.filter((todo) => todo.userId === user.id),
            success: true,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
          message: "Internal server error",
          success: false,
        });
    }
})

router.post('/',isAuthorised,async(req,res)=>{
    try{
        const {user} = req
        const {title} = req.body
        if(!title){
            return res.status(400).json({
                message:'title is required',
                success:false
            })
        }
        const todo = {
            id:uuid.v4(),
            title,
            complete:false,
            userId:user.id
        }
        const todos = await fs.readFile('./db/todos.json','utf8')
        const parsedTodos = JSON.parse(todos)
        parsedTodos.push(todo)
        await fs.writeFile('./db/todos.json',JSON.stringify(parsedTodos))
        return res.json({
            data:todo,
            success:true,
            message:'todo created successfully'

        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
          message: "Internal server error",
          success: false,
        });
      }
})

router.patch('/:id',isAuthorised,async(req,res)=>{
    try{
        const {user} = req
        const {id:todoId} = req.params
        const {title,complete} = req.body
        // check if todo exists
        const todos = await fs.readFile('./db/todos.json','utf8')
        const parsedTodos = JSON.parse(todos)
        const todo = parsedTodos.find((todo)=>todo.id === todoId)
        if(!todo){
            return res.status(404).json({
                message:'todo not found',
                success:false
            })
        }
        // check if todo belongs to the user
        if(todo.userId !== user.id){
            return res.status(401).json({
                message:'unauthorized',
                success:false
            })
        }
        // update the todo
        if(title !== undefined){
            todo.title = title
        }
        if(complete !== undefined){
            todo.complete = complete
        }
        await fs.writeFile('./db/todos.json',JSON.stringify(parsedTodos))
        return res.json({
            data:todo,
            success:true,
            message:'todo updated successfully'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
          message: "Internal server error",
          success: false,
        });
      }
})

router.delete('/:id',isAuthorised,async(req,res)=>{})

module.exports = router;