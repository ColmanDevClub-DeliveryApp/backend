import express from "express";
import notFoundRoutes from "../routes/notFound.routes.js";
import RestaurantController from "../controllers/restaurant.controller.js";
const router = express.Router();

/**
 * return all restaurants.
 */
router.get("/", RestaurantController.getAllRestaurant);

/**
 * return the specified restaurant.
 */
router.get("/:name", RestaurantController.getRestaurantByName);

/**
 * add a new restaurant.
 */
router.post("/", RestaurantController.addRestaurant);

/**
 * delete the specified restaurant.
 */
router.delete("/", RestaurantController.removeRestaurant);

/**
 * update the specified restaurant.
 */
router.patch("/", RestaurantController.updateRestaurant);

export default router;