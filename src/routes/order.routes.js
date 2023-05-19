import express from "express";
import OrderController from "../controllers/order.controller.js";
const router = express.Router();

/**
 * @details Add new order
 */
router.post("/", OrderController.addOrder);

/**
 * @details Get all orders
 */
router.get("/", OrderController.getAllOrders);

/**
 * @details Get order by Id
 */
router.get("/:id", OrderController.getOrderById);

/**
 * @details update order
 */
router.put("/", OrderController.updateOrder);

/**
 * @details delete order by Id
 */
router.delete("/:id", OrderController.removeOrderById);

export default router;
