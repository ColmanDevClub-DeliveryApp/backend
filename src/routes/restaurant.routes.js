import express from "express";
import RestaurantApi from "../services/restaurant.services.js";
import notFoundRoutes from "../routes/notFound.routes.js";
const router = express.Router();

/**
 * return the specified restaurant.
 */
router.get("/", async (req, res) => {
  const { id, name } = req.query;

  if (id) {
    try{
      const userID = await RestaurantApi.getRestaurantById(id);
      if(userID){
        return res.send(
          `You requested restaurant by ID: ${userID}`
        );
      }
    }catch(e){
      return notFoundRoutes(req, res);
    }
  }

  if (name) {
    try{
      const restaurantName = await RestaurantApi.getRestaurantByName(name);
      if(restaurantName){
        return res.send(
          `You requested restaurant by name: ${await RestaurantApi.getRestaurantByName(restaurantName)}`
        );
      }
    }catch(e){
      return notFoundRoutes(req, res);
    }
  }

  res.send(
    `You requested ${await RestaurantApi.getAllRestaurant()}`
  );
});

export default router;