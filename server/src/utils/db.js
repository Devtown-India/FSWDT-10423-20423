import mongoose from 'mongoose';

const DB_URI ='mongodb+srv://kartik:kartik@mycluster.adymruy.mongodb.net'


export const connectDB = async () => {
    try {
        await mongoose.connect(DB_URI,{})
        console.log('MongoDB connected ...');
    } catch (error) {
        console.log(error);
    }
}
