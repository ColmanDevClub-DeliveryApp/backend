import express from "express";
import DishApi from "../services/dishes.services.js";
const router = express.Router();


/**
 * return the specified dish.
 */

//TODO check if this id is valid in the DB if not return 404
router.get('/:dish', async (req, res)=>{
    const {dish} = req.params;
    console.log(dish);
    res.send(await DishApi.getDishByName(dish));
});


export default router;