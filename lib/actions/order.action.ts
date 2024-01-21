import { OrderParams } from "@/types";
import connectToDatabase from "../database/mongodb";
import Order from "../database/models/order.model";



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
