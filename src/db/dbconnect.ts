import mongoose from "mongoose";

const connectDB =async ()=>{
    try {
       const connectionInstance =  await mongoose.connect(`${process.env.DbURL}`,{
            dbName:"EcommerceApp",
        });
        console.log(`Db Connection Succesful: ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.error("MongoDb Connection error :",error);
        process.exit(1);
    }

};
export default connectDB;