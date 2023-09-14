import mongoose from 'mongoose'
import { hashPassword } from '../../utils/auth'

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required']
    },
    lastName: {
        type: String,
        required: [true, 'First name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password:{
        type: String,
        required: [true, 'Password is required']
    },
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    posts:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }],
    deleted:{
        type: Boolean,
        default: false
    },
    lastLogins:[{
        type: Date
    }]
},{
    timestamps: true
})

UserSchema.virtual('fullName').get(function(){
    return `${this.firstName} ${this.lastName}`
})

UserSchema.virtual('initials').get(function(){
    return `${this.firstName[0]}${this.lastName[0]}`
})

UserSchema.pre('save', async function(next){
    if(this.isModified('password')){
        const hashedPassword = await hashPassword(this.password)
        if(hashedPassword){
            this.password = hashedPassword
            next()
        }else{
            next(new Error('Could not hash password'))
        }
    }
})

export default mongoose.model('User', UserSchema)