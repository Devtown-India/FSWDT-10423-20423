import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({

},{
    timestamps: true
})

export default mongoose.model('User', UserSchema)