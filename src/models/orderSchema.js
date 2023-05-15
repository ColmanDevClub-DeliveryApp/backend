import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
    deliveryPrice: Number,
    dishes: [{
        type: [{type: mongoose.Schema.Types.ObjectId, ref: 'dish'}]
    }],
    user:{
        type: [{type: mongoose.Schema.Types.ObjectId, ref: 'user'}]
    },
    restaurant:{
        type: [{type: mongoose.Schema.Types.ObjectId, ref: 'restaurant'}]
    }
});

const Order = mongoose.model('order', orderSchema);

export {orderSchema, Order};