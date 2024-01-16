
import { Schema, model, models } from "mongoose";



const userSchema = new Schema({
    clerkId:{
        type: String,
    },
    username: {
        type : String,
    },
    email:{
        type: String,
    },
    firstname:{
        type: String,
    },
    lastname:{
        type: String,
    },
    avatar:{
        type: String,
    },
    
});


const User = models.User || model("User" , userSchema);


export default User;
