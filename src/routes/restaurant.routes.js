import express from "express";
import RestaurantApi from "../services/restaurant.services.js";
import notFoundRoutes from "../routes/notFound.routes.js";
const router = express.Router();

/**
 * return all restaurants.
 */
router.get("/", async (req, res) => {
  const restaurants = await RestaurantApi.getAllRestaurant();
  res.send(`${restaurants}`);
});

/**
 * return the specified restaurant.
 */
router.get("/:name", async (req, res) => {
  const { name } = req.params;

  if (name) {
    try{
      const restaurant = await RestaurantApi.getRestaurantByName(name);
      if(restaurant.name){
        return res.send({restaurant});
      }
    }catch(e){
      return notFoundRoutes(req, res);
    }
  }
});

/* openingHours, orders, catalog -> Missing! */
router.post("/", async (req, res) => {
  const { name, description, street, city, zip, phone, image} = req.body;
  console.log(req.body);
  RestaurantApi.addRestaurant(name, description, street, city, zip, phone, image);
});

/**
 * delete the specified restaurant.
 */
router.delete("/", async (req, res) => {
  const {name} = req.body;
  RestaurantApi.removeRestaurant(name);
});

/* openingHours, orders, catalog -> Missing! */
router.patch("/", async (req, res) => {
  const {name, newName, description, street, city, zip, phone, image} = req.body;
  RestaurantApi.updateRestaurant(name, newName, description, street, city, zip, phone, image);
});

export default router;