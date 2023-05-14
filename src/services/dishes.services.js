import { Dish } from "../models/dishScheme.js"

/**
 * @param {*} dish type Dish | dish that will be added to database
 * @returns type String | id of added dish
 */
const add = async (dish) => {
    try {
        const newDish = new Dish({
            name: dish.name.toLowerCase(),
            description: dish.description,
            price: dish.price,
            image: dish.image,
        })
        const DB_dish = await newDish.save()
        if(DB_dish){
            return DB_dish._id
        }    
    } catch (error) {
        console.log(error);
    }
}

/**
 * @param {*} id type String | id of catalog that will be returned
 * @returns type Dish | dish from database
 */
const getById = async (id) => {
    try{
        const dish = await Dish.findById(id)
        if(dish) {
            return dish;
        }
    } catch (error) {
        console.log(error);
    }
}

/**
 * @param {*} name type String | name of dish that will be returned
 * @returns type Dish | dish from database
 */
const getByName = async (name) => {
    try{
        const dish = await Dish.findOne({name})
        if(dish) {
            return dish;
        }
    } catch (error) {
        console.log(error);
    }
}

/**
 * @returns type Array | all dishes from database
 */
const getAll = async () => {
    try{
        const dishes = await Dish.find()
        if(dishes) {
            return dishes
        }
    } catch (error) {
        console.log(error);
    }
}

/**
 * @param {*} id type String | id of dish that will be updated
 * @param {*} dish type Dish | dish that will be updated
 * @returns type String | id of updated dish
 */
const update = async (id, dish) => {
    try {
        const updatedDish = await Dish.findByIdAndUpdate(id, dish);
        return updatedDish._id
    } catch (error) {
        console.log(error);
    }
}

/**
 * @param {*} id type String | id of dish that will be deleted
 */
const removeById = async (id) => {
    try {
        await Dish.deleteOne({_id: id})
    } catch (error) {
        console.log(error);
    }
}

const DishApi = {add, getAll, getById, getByName, removeById, update};

export default DishApi;