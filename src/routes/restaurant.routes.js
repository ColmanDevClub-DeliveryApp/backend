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
      // here we need to send a 404 error
      return res.send(
        `You requested restaurant by ID, but it doesn't exist: ${id}`
      );
    }
  }

  if (name) {
    try{
      const restaurantName = await RestaurantApi.getRestaurantByName(name);
      if(restaurantName){
        return res.send(
          `You requested restaurant by name: ${await RestaurantApi.getRestaurantByName(name)}`
        );
      }
    }catch(e){
        // here we need to send a 404 error
      return res.send(
        `You requested restaurant by name, but it doesn't exist: ${name}`
      );
    }
  }

  res.send(
    `You requested restaurant ${await RestaurantApi.getAllRestaurant()}`
  );
});

router.get("*", notFoundRoutes);

export default router;