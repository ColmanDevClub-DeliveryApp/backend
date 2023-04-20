import { Dish } from "../models/dishScheme.js"

const getAllDishes = async () => {
    return await Dish.find();
}

const getDishById = async (id) => {
    return await Dish.findById(id);
}

const getDishByName = async (name) => {
    return await Dish.findOne({name});
}

const addDish = async (name, desc, price, image, category, restaurant) => {
    try {
        const dish = new Dish({
            name,
            description: desc, 
            price, image, 
            category, 
            restaurant
        });
        const newDish = await dish.save();
    } catch (error) {
        console.log(error);
    }
}

const removeDish = async (name) => {
    await Dish.deleteOne({name});
}

const updateDish = async (name, newName=name, desc, price, image, category, restaurant) => {
    await Dish.findOneAndUpdate({name}, 
        {name:newName,
        description: desc,
        price, image,
        category,
        restaurant
    })
}

const DishApi = {getAllDishes, getDishById, getDishByName, addDish, removeDish, updateDish};

export default DishApi;