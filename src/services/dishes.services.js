import { Dish } from "../models/dishScheme.js"

/**
 * @param {*} dish type Dish | dish that will be added to database
 * @returns type String | id of added dish
 */
const add = async (dish) => {
    try {
        const DB_dish = await dish.save()
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
    const dish = await Dish.findById(id)
    if(dish) {
        return dish;
    }
    console.log(error);
}

/**
 * @param {*} name type String | name of dish that will be returned
 * @returns type Dish | dish from database
 */
const getByName = async (name) => {
    const dish = await Dish.findOne({name})
    if(dish) {
        return dish;
    }
    console.log(error);
}

/**
 * @returns type Array | all dishes from database
 */
const getAll = async () => {
    const dishes = await Dish.find()
    if(dishes) {
        return dishes
    }
    console.log(error);
}

/**
 * @param {*} id type String | id of dish that will be updated
 * @param {*} catalog type Dish | dish that will be updated
 * @returns type String | id of updated dish
 */
const update = (id, dish) => {
    try {
        const updatedDish = Dish.findByIdAndUpdate(id, dish);
        return updatedDish._id
    } catch (error) {
        console.log(error);
    }
}

/**
 * @param {*} id type String | id of dish that will be deleted
 */
const removeById = (id) => {
    try {
        Dish.deleteOne(_id == id)
    } catch (error) {
        console.log(error);
    }
}

const DishApi = {add, getAll, getById, getByName, removeById, update};

export default DishApi;