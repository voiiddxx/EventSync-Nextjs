"use server"

import { createEventParams } from "@/types";
import connectToDatabase from "../database/mongodb";



export const createEvent = async ({userId , event} : createEventParams) => {
    try {
        await connectToDatabase();
        console.log(userId , event);
        

    } catch (error) {
        console.log(error);
        
    }
}