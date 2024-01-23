"use server"

import { OrderParams } from "@/types";
import connectToDatabase from "../database/mongodb";
import Order from "../database/models/order.model";
import path from "path";
import { model } from "mongoose";
import Event from "../database/models/event.model";
import User from "../database/models/user.model";





    const populateOrder = (query: any) => {
        return query
        .populate({path: 'event' , model: Event , select: '_id title imageUrl price startDate category eventType'});
    }


    const populateUserorder = (query: any) => {
        return query
        .populate({path:'buyer' , model:User , select:'username email avatar'});
    }

export const OrderEvent =  async (order : OrderParams) => {
    try {
        await connectToDatabase();

        const newOrder = await Order.create({
            buyer:order.buyer,
            event:order.event
        });
        return JSON.parse(JSON.stringify(order));

    } catch (error) {
        console.log(error);
        
        throw new Error("Some error occured"); 
    }
} 


export const getuserOrder = async (userId: string) => {
    try {
        await connectToDatabase();
        const condition = {
            buyer:userId
        }
        const order = await populateOrder(Order.find(condition));
        
        return JSON.parse(JSON.stringify(order));

        

    } catch (error) {
        console.log(error);
        throw new Error("Got some error");
        
    }
}


export const getOrderdetailbyeventId = async (eventId: string) => {
    try {
        await connectToDatabase();
        const condition = {
            event: eventId,
        }
        const order = await populateUserorder(Order.find(condition));
        console.log(order);
        
        
    } catch (error) {
        console.log(error);
        throw new Error("some error found");
        
    }
}