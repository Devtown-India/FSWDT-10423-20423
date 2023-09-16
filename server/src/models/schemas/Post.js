import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title:{
        type: String,
        required: [true, 'Title is required']   
    },
    description:{
        type: String,
    },
    image:{
        type: String,
        required: [true, 'Image is required']
    },
    likes : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    comments:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    deleted:{
        type: Boolean,
        default: false
    }
},{
    timestamps: true
})

export default mongoose.model('Post', PostSchema)