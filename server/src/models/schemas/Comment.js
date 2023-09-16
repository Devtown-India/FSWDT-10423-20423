import mongoose from 'mongoose'

const CommentSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    text:{
        type: String,
        required: [true, 'comment title is required']   
    },
    likes : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    deleted:{
        type: Boolean,
        default: false
    }
},{
    timestamps: true
})

export default mongoose.model('Post', CommentSchema)