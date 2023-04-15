import express from "express";
import RestaurantApi from "../services/restaurant.services.js";
import notFoundRoutes from "../routes/notFound.routes.js";
import { Routes } from "react-router-dom";
const router = express.Router();

/**
 * return the specified restaurant.
 */
router.get("/", async (req, res) => {
  const { id, name } = req.query;

  if (id) {
    try{
      const restaurant = await RestaurantApi.getRestaurantById(id);
      if(restaurant.id){
        return res.send(
          `You requested restaurant by ID: ${restaurant}`
        );
      }
    }catch(e){
      return notFoundRoutes(req, res);
    }
  }

  if (name) {
    try{
      const restaurant = await RestaurantApi.getRestaurantByName(name);
      if(restaurant.name){
        return res.send(
          `You requested restaurant by name: ${restaurant}`
        );
      }
    }catch(e){
      return notFoundRoutes(req, res);
    }
  }


  const restaurants = await RestaurantApi.getAllRestaurant();
  res.send(
    `Restaurants: ${restaurants}`
  );
});
// opening time + catalog dishes
router.post("/", async (req, res) => {
  const { name, description, street, city, zip, phone, image} = req.body;
  RestaurantApi.addRestaurant(name, description, street, city, zip, phone, image);
});
export default router;