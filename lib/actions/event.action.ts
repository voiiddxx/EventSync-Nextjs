"use server"

import { createEventParams } from "@/types";
import connectToDatabase from "../database/mongodb";
import User from "../database/models/user.model";



export const createEvent = async ({userId , event , path} : createEventParams) => {
    try {
        await connectToDatabase();
        
        console.log("testing again");
        
        const organizer = await User.findOne({clerkId:userId});
        console.log(organizer);
        
        
        
        
        

    } catch (error) {
        console.log(error);
        
    }
}