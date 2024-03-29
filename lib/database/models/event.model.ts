import mongoose, { Document, Schema, model, models } from "mongoose";


export interface IEvent extends Document {
    _id: string;
    title: string;
    detail?: string;
    location?: string;
    category: string,
    imageUrl: string;
    startDate: Date;
    endDate: Date;
    price: string;
    eventType: string;
    url?: string;
    organizer: { _id: string, username: string, email: string }
  }
  

const eventSchema = new Schema({
    title:{
        type: String,
    },
    detail:{
        type: String,
    },
    eventType:{
        type: String,
    },
    price:{
        type: String,
    },
    category:{
        type : String,
    },
    location:{
        type : String,
    },
    startDate:{
        type : Date,
    },
    endDate:{
        type: Date,
    },
    imageUrl:{
        type : String,
    },
    url:{
        type : String
    },
    organizer: {
        type: Schema.Types.ObjectId , ref:'User',
    }

});

const Event = models.Event || model("Event" , eventSchema);

export default Event;