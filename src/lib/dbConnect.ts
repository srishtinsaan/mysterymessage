import { log } from "console";
import mongoose from "mongoose";

type connectionObject = {
    isConnected?: number // it is optional 
}

const connection : connectionObject = {} // empty obj bcz its type was optional 

async function dbConnect() : Promise<void>{ // function's return type is a Promise and promise when resolved gives void
    
    // checking if db is connected or not
    
    if(connection.isConnected){
        console.log("Already connected to DB");
        return
    }

    // connecting DB
    try {

        const db = await mongoose.connect(process.env.MONGODB_URI || '', {}) // || ke baad wo options k liye hai. 

         connection.isConnected = db.connections[0].readyState;

    } catch (error) {
        
       console.log("DB connection failed");
       
        process.exit(1)

    }

}