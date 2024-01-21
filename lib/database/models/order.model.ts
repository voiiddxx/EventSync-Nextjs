import { Schema, model, models } from "mongoose";



const orderSchema = new Schema({
    buyer:{
        type: Schema.Types.ObjectId,
        ref:'User',
    },
    event:{
        type : Schema.Types.ObjectId,
        ref:'Event'
    },

    cretaedAt:{
        type: Date,
        default: Date.now(),
    }
});


const Order = models.Order || model('Order' , orderSchema);

export default Order;
