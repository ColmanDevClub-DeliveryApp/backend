import mongoose from "mongoose";

const dishScheme = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,
        trim: true,
        unique: true
    },
    description: {
        type: String,
        minLength: 2,
        trim: true
    },
    price: {
        type: Number,
        required: true,
    },
    amount: {
        type: Number,
    },
    image: {
        type: String,
        trim: true
    },
    category: {
        type: String,
        trim: true
    },
    restaurant: {
        ref: "restaurant",
        required: true
    },
    orders: {
        ref: "order",
    }
});


const Dish = mongoose.model("dish", dishScheme);

export {dishScheme, Dish}