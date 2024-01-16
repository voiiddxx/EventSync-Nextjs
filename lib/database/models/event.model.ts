import mongoose, { Schema, model, models } from "mongoose";



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
    startDta:{
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