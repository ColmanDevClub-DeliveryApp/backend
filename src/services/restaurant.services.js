
import { Restaurant } from "../models/restScheme"

const getRestaurantById = async (id)=> {
    return await Restaurant.findOne(id);
}
const getAllRestaurant = async ()=> {
    return await Restaurant.find();
}