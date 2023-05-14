import { Restaurant } from "../models/restScheme.js"


/**
 * @param {*} restaurant type Restaurant | restaurant object
 * @returns | return new restaurant
 */
const add = async (restaurant) => {
    try{
        const rest = new Restaurant({
            name: restaurant.name.toLowerCase(),
            shownName: restaurant.shownName,
            description: restaurant.description, 
            address: {
                street: restaurant.street, 
                city: restaurant.city , 
                zip: restaurant.zip
            },
            phone: restaurant.phone,
            openingHours: restaurant.openingHours, 
            image: restaurant.image,
            deliveryTime: restaurant.deliveryTime,
            deliveryCost: restaurant.deliveryCost,
            category: restaurant.category
       })
        const newRestaurant = await rest.save();
        if(newRestaurant){
            return newRestaurant._id;
        }
    }catch (error) {
        console.log(error);
    }
}

/**
@param {*} id type String | the id of the restaurant that we want get from database
@returns type Restaurant | the restaurant from the database
 */
const getById = async (id) => {
    try{
        const restaurant = Restaurant.findById(id);
        if(restaurant){
            return restaurant;
        }
    }catch (error) {
        console.log(error);
    }
}

/**
 * @param {*} name type String | restaurant name
 * @returns | return restaurant
 */
const getByName = async (name)=>{
    try{
        const restaurant = await Restaurant.findOne({name})
        if(restaurant){
            return restaurant;
        }
    }catch (error){
        console.log(error);
    }
}

/**
 * @returns | return all restaurants
 */
const getAll = async ()=> {
    return await Restaurant.find();
}

/**
    @param {} id type String | the id of the restaurant that will be change
    @param {} restaurant type String | the id of the updated restaurant
 */
const update = async (id, restaurant)=>{
    try{
        const updateRestaurant = await Restaurant.findByIdAndUpdate(id, restaurant);
        if(updateRestaurant){
            return updateRestaurant._id;
        }
    }catch(error){
        console.log(error);
    }
}

/**
 * @param {*} id type String | restaurant id
 */
const removeById = async (id)=>{
    try{
        await Restaurant.deleteOne({_id: id});
    }catch(error){
        console.log(error);
    }
}

const RestaurantApi = {add, getById, getByName, update, removeById, getAll};

export default RestaurantApi;