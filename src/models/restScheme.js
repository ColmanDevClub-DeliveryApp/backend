import mongoose from "mongoose";

const restScheme = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,
        trim: true,
        unique: true
    },
    shownName: {
        type: String,
    },
    description: {
        type: String,
        minLength: 2,
        trim: true
    },
    address: {
        type: {
            street: {
                type: String,
                required: true,
                trim: true
            },
            city: {
                type: String,
                required: true,
                trim: true
            },
            zip: {
                type: String,
                required: true,
                trim: true
            }
        },
        required: true
    },
    phone: {
        type: Number,
        required: true,
    },
    openingHours: {
        type: [{
            day: {
                type: String,
                required: true,
                trim: true
            },
            hours: {
                type: String,
                required: true,
                trim: true
            }
        }],
        required: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    },
    deliveryTime: {
        type: Number,
        min: 0,
        max: 30,
        default: 0
    },
    deliveryCost: {
        type: Number,
        min: 0,
        max: 20,
        default: 0
    },
    orders: {
        type: [{type: mongoose.Schema.Types.ObjectId, ref: 'order'}]
    },
    numberOfOrders: {
        type: Number,
        min: 0,
        default: 0
    },
    category: {
        type: [{
            title: {
                type: String,
                minLength: 2,
                trim: true
            },
            subTitle: {
                type: String,
                minLength: 2,
                trim: true
            },
            dishes: [{type: mongoose.Schema.Types.ObjectId,ref: 'dish'}]
        }],
        required: true
    }
    
})

const Restaurant = mongoose.model("restaurant", restScheme);

export {restScheme, Restaurant}