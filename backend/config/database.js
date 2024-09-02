import mongoose from "mongoose";
const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI).then(() =>{
        console.log('Dtabase Connected');
        }).catch((error)=>{
            console.log(error);
        })
};
export default connectDB;