import { Restaurant } from "../models/restScheme.js"

// const getRestaurantById = async (id)=> {
//     return await Restaurant.findById(id);
// }

// const getAllRestaurant = async ()=> {
//     return await Restaurant.find();
// }
// const getRestaurantByName = async (name)=> {
//     return await Restaurant.findOne({name}).populate('category.dishes');
// }

// const addRestaurant = async (restaurant) => {
//     try {
//         const newRest = await restaurant.save();   
//     } catch (error) {
//         console.log(error);
//     }
// }

// const removeRestaurant = async (name)=> {
//     await Restaurant.deleteOne({name});
// }

// const updateRestaurant = async (name, newName=name, desc, street, city, zip, phone, image) =>{
//     const address = {street, city, zip};
//     const openingHours = [{day: "a", hours: "1200-1600"},{day: "b", hours: "1200-1600"}]
//     const category = [{title: "category", subtitle: "category"}]
//     await Restaurant.findOneAndUpdate({name}, {name:newName, 
//         description: desc, 
//         address, 
//         phone, 
//         image, 
//         category, 
//         openingHours})
// }

// const RestaurantApi = {getAllRestaurant, getRestaurantById, getRestaurantByName, addRestaurant, removeRestaurant, updateRestaurant};


/**
 * 
 * @param {*} restaurant | restaurant object
 * @returns | return new restaurant
 */
const add = async (restaurant) => {
    try{
        const newRestaurant = await restaurant.save();
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
 * @returns type Array | array of restaurants
 */
const getAll = async ()=>{
    try{
        const restaurants = await Restaurant.find();
        if(restaurants){
            return restaurants;
        }
    }catch (error){
        console.log(error);
    }
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

const RestaurantApi = {add, getById, getByName, getAll, update, removeById};

export default RestaurantApi;