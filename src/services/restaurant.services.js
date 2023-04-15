import { Restaurant } from "../models/restScheme.js"

const getRestaurantById = async (id)=> {
    return await Restaurant.findById(id);
}

const getAllRestaurant = async ()=> {
    return await Restaurant.find();
}
const getRestaurantByName = async (name)=> {
    return await Restaurant.findOne({name});
}

const addRestaurant = async (name, desc, street, city, zip, phone, image) => {
    const address = {street, city, zip};
    const openingHours = [{day: "a", hours: "1200-1600"},{day: "b", hours: "1200-1600"}]
    const catalog = [{title: "catalog", subtitle: "catalog"}]
    const rest = new Restaurant ({
        name, 
        description: desc, 
        address, 
        phone, 
        image, 
        catalog, 
        openingHours
    })
    try {
        const newRest = await rest.save();   
    } catch (error) {
        console.log(error);
    }
    
}

const RestaurantApi = {getAllRestaurant, getRestaurantById, getRestaurantByName, addRestaurant};

export default RestaurantApi;