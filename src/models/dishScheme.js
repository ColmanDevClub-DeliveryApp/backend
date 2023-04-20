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
    image: {
        type: String,
        trim: true
    },
    category: {
        type: String,
        trim: true
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "restaurant",
        required: true
    }
});


const Dish = mongoose.model("dish", restScheme);

export {dishScheme, Dish}