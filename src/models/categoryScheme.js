import mongoose from "mongoose";

const categoryScheme = mongoose.Schema({
        title: {
            type: String,
            required: true,
            minLength: 2,
            trim: true,
            unique: true
        },
        subtitle: {
            type: String,
            minLength: 2,
            trim: true
        },
        restaurants: {
            type: [{type: mongoose.Schema.Types.ObjectId, ref: 'restaurants'}]
        },
});

const Category = mongoose.model("categories", categoryScheme);
export {categoryScheme, Category}