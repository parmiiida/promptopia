import mongoose from "mongoose";

let isConnected = false ;//track the connection status

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)

    if(isConnected) {
        console.log('mongoDB is already connected');
        return; //to stop it from running
    }

    //if we are not already coonected :
    try{
    
    //try to establish the connection
    await mongoose.connect(process.env.MONGODB_URI, {
        dbName:'share_prompt',
        useNewUrlParser : true ,
        useUnifiedTopology:true,
    })

    isConnected = true;

    console.log('mongoDB connected')

    }catch (error){
        console.log(error)
    }
}