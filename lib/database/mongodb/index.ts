
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || {conn:null , promise:null};

export const connectToDatabase = async () => {

    try {
        if(cached.conn) {
            return cached.conn;
        }
        if(!MONGODB_URI) {
            throw new Error("Mongodb uri is missing");
        }
        cached.promise = cached.promise || mongoose.connect(MONGODB_URI , {
            dbName:'EventSync',
            bufferCommands:false
        }).then(() => {
            console.log("database connected");
            
        })

        cached.conn = await cached.promise;
        return cached.conn;
    } catch (error) {
        console.log(error);
        
    }
}