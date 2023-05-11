import express from "express";
import DishController from "../controllers/dish.controller.js";
const router = express.Router();


/**
 * return the specified dish.
 */
router.get('/:dish', DishController.getDishByName);

/**
 * add a new dish.
 */
router.post('/', DishController.addDish);


/**
 * delete the specified dish.
 */
router.delete('/:id', DishController.removeDish);

/**
 * update the specified dish.
 */
router.patch('/', DishController.updateDish);

export default router;