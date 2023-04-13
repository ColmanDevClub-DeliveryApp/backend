import express from "express";
import RestaurantApi from "../services/restaurant.services.js";
const router = express.Router();

/**
 * return the specified restaurant.
 */

// todo: add try and catch
router.get("/", async (req, res) => {
  const { id, name } = req.query;
  console.log(id);
  console.log(name);
  if (id) {
    return res.send(
      `You requested restaurant by ID: ${await RestaurantApi.getRestaurantById(id)}`
    );
  }
  if (name) {
    return res.send(
      `You requested restaurant by name: ${await RestaurantApi.getRestaurantByName(name)}`
    );
  }
  res.send(
    `You requested restaurant ${await RestaurantApi.getAllRestaurant()}`
  );
});