"use server"

import { createEventParams } from "@/types";
import connectToDatabase from "../database/mongodb";
import User from "../database/models/user.model";



export const createEvent = async ({userId , event , path} : createEventParams) => {
    try {
        await connectToDatabase();

        const organizer = await User.find({});
        console.log(organizer);
        
        
        
        
        

    } catch (error) {
        console.log(error);
        
    }
}