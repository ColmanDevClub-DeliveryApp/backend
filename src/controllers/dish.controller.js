import DishApi from '../services/dishes.services.js'

const getDishByName = async (req, res, next)=>{
    const {name} = req.params;
    const dish = await DishApi.getByName(name);
    res.send(dish);
}

const addDish = async (req, res, next)=>{
    const {dish} = req.body;
    const dish_id = await DishApi.add(dish);
    if(!dish_id){
        res.status(400).send("Dish not added")
    }
}

const removeDish = async (req, res, next)=>{
    const {id} = req.params;
    DishApi.removeById(id);
}

const updateDish = async (req, res, next)=>{
    const {id, dish} = req.body;
    DishApi.update(id, dish);
}

const DishController = {addDish, getDishByName, removeDish, updateDish};
export default DishController;