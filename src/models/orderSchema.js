import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
    deliveryPrice: Number,
    dishes: [{
        ref: 'dish',
    }],
    user:{
        ref: 'user',
    },
    restaurant:{
        ref: 'restaurant',
    }
});

const Order = mongoose.model('order', orderSchema);

export {orderSchema, Order};