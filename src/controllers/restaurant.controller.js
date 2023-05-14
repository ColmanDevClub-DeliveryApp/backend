import {Restaurant} from '../models/restScheme.js';
import RestaurantApi from '../services/restaurant.services.js';
import CategoryApi from '../services/category.services.js'

const addRestaurant = async (req, res, next)=>{
    const {catalog_id, restaurant} = req.body;
    const restaurant_id = await RestaurantApi.add(restaurant)
    if(!restaurant_id){
        res.status(400).send("Restaurant not added")
    }else{
        const category = await CategoryApi.getById(catalog_id)
        category.restaurants.push(restaurant_id)
        CategoryApi.update(category._id, category);
    }
}

const removeRestaurant = async (req, res, next)=>{
    const {id} = req.body;
    await RestaurantApi.removeById(id);
}

const getAllRestaurant = async (req, res, next) => {
    const restaurants = await RestaurantApi.getAll();
    res.send(restaurants);
}

const getRestaurantByName = async (req, res, next) => {
    const { name } = req.params;
    const restaurant = await RestaurantApi.getByName(name);
    res.send(restaurant);
}

const updateRestaurant = async (req, res, next) => {
    const {id, restaurant} = req.body;
    await RestaurantApi.update(id, restaurant);
}

const RestaurantController = {addRestaurant, removeRestaurant, getAllRestaurant, getRestaurantByName, updateRestaurant};

export default RestaurantController;