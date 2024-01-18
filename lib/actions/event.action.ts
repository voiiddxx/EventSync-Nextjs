"use server"

import { createEventParams , GetAllEventsParams } from "@/types";
import connectToDatabase from "../database/mongodb";
import User from "../database/models/user.model";
import Event from "../database/models/event.model";
import { revalidatePath } from "next/cache";



        const populateEvent = async ( query: any) => {
            return query
            .populate({ path: 'organizer', model: User, select: '_id username' })

        }

export const getEventById =async  ( eventId: string) => {
    try {
        
        connectToDatabase();
        const event = await populateEvent(Event.findById(eventId));
        if(!event) {
            throw new Error("No event found to this particular id");
        }
        return JSON.parse(JSON.stringify(event));

    } catch (error) {
        console.log(error);
        throw new Error("Some error occured");
    }
}



    export const getAllevents = async  ({query , limit =1 , page , category}: GetAllEventsParams) => {
        try {
            await connectToDatabase();
            const conditions = {};
            const eventsQuery = await populateEvent(Event.find(conditions).limit(limit));
            const eventCount = await Event.countDocuments(conditions);
            return {
                data:JSON.parse(JSON.stringify(eventsQuery)),
                totalpages: Math.ceil(eventCount / limit)
            };

            
        } catch (error) {
            console.log(error);
            
        }
    }

export const createEvent = async ({userId , event , path} : createEventParams) => {
    try {
        await connectToDatabase();

        const organizer = await User.findById(userId);

        if(!organizer){

            throw new Error("Organizer not found there is some unknown issue occured");
            
        }
        
        const newEvent = await Event.create({...event , organizer:userId});
        revalidatePath(path);

        console.log(newEvent);
        

        return JSON.parse(JSON.stringify(newEvent));

        
        
    } catch (error) {
        console.log(error);
        
    }
}