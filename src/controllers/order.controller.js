import OrderApi from "../services/order.services.js";
import RestaurantApi from "../services/restaurant.services.js";
import UserApi from "../services/user.services.js";

const getAllOrders = async (req, res, next) => {
  const orders = await OrderApi.getAll();
  res.send(orders);
};

const getOrderByName = async (req, res, next) => {
  const { name } = req.params;
  const order = await OrderApi.getByName(name);
  res.send(order);
};

const getOrderById = async (req, res, next) => {
  const { id } = req.params;
  const order = await OrderApi.getById(id);
  res.send(order);
};

const addOrder = async (req, res, next) => {
  const { order } = req.body;
  const order_id = await OrderApi.add(order);
  if (!order_id) {
    res.status(400).send("Order not added");
  }
  const restaurant = await RestaurantApi.getById(order.restaurant);
  const user = await UserApi.getById(order.user);
  restaurant.orders.push(order_id);
  user.orders.push(order_id);
  await RestaurantApi.update(restaurant._id, restaurant);
  await UserApi.update(user._id, user);
};

const updateOrder = async (req, res, next) => {
  const { id, order } = req.body;
  await OrderApi.update(id, order);
};

const removeOrderById = async (req, res, next) => {
  const { id } = req.params;
  const order = await OrderApi.getById(id);
  if (!order) {
    res.status(400).send("Order not found");
  }
  const restaurant = await RestaurantApi.getById(order.restaurant);
  const user = await UserApi.getById(order.user);
  restaurant.orders = restaurant.orders.filter(
    (order_id) => order_id.toString() !== id
  );
  user.orders = user.orders.filter((order_id) => order_id.toString() !== id);
  await RestaurantApi.update(restaurant._id, restaurant);
  await UserApi.update(user._id, user);
  await OrderApi.removeById(id);
};

const OrderController = {
  removeOrderById,
  updateOrder,
  addOrder,
  getOrderByName,
  getAllOrders,
  getOrderById,
};
export default OrderController;
