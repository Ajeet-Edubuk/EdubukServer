import mongoose  from 'mongoose';


const connectDB = async()=>{
    try {
        const connect = await mongoose.connect("mongodb://localhost:27017/Edubuk" )
        console.log('Connected to MongoDB database');
    } catch (error) {
        console.log('Error in mongoDB' );
    }
}

export default connectDB;