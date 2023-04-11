import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
    deliveryPrice: Number,
    dishes: [{
        ref: 'dish',
        required: true
    }],
    user:{
        ref: 'user',
        required: true
    },
    restaurant:[{
        ref: 'restaurant',
        required: true
    }]
});

const Order = mongoose.model('order', orderSchema);

export {orderSchema, Order};