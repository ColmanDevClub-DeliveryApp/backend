import { Restaurant } from "../models/restScheme.js"
import {toTitleCase} from "../utils/util.js"

const getRestaurantById = async (id)=> {
    return await Restaurant.findById(id);
}

const getAllRestaurant = async ()=> {
    return await Restaurant.find();
}
const getRestaurantByName = async (name)=> {
    return await Restaurant.findOne({name}).populate('category.dishes');
}

const addRestaurant = async (restaurant) => {
    try {
        const newRest = await restaurant.save();   
    } catch (error) {
        console.log(error);
    }
}

const removeRestaurant = async (name)=> {
    await Restaurant.deleteOne({name});
}

const updateRestaurant = async (name, newName=name, desc, street, city, zip, phone, image) =>{
    const address = {street, city, zip};
    const openingHours = [{day: "a", hours: "1200-1600"},{day: "b", hours: "1200-1600"}]
    const category = [{title: "category", subtitle: "category"}]
    await Restaurant.findOneAndUpdate({name}, {name:newName, 
        description: desc, 
        address, 
        phone, 
        image, 
        category, 
        openingHours})
}

const RestaurantApi = {getAllRestaurant, getRestaurantById, getRestaurantByName, addRestaurant, removeRestaurant, updateRestaurant};

export default RestaurantApi;