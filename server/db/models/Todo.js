// Schema Blueprint for User

const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        maxlength:50,
    },
    complete:{
        type:Boolean,
        default:false
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
})

const Todo = mongoose.model('Todo',TodoSchema);

module.exports = {Todo};