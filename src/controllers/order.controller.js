import OrderApi from '../services/order.services.js';

const getAllOrders = async (req, res, next)=>{
    const orders = await OrderApi.getAll();
    res.send(orders);
}

const getOrderByName = async (req, res, next)=>{
    const {name} = req.params;
    const order = await OrderApi.getByName(name);
    res.send(order);
}

const addOrder = async (req, res, next)=>{
    const {order} = req.body;
    const order_id = await OrderApi.add(order);
    if(!order_id){
        res.status(400).send("Order not added")
    }
}

const updateOrder = async (req, res, next)=>{
    const {id, order} = req.body;
    await OrderApi.update(id, order);
}

const removeOrderById = async (req, res, next)=>{
    const {id} = req.params;
    await OrderApi.removeById(id);
}


const OrderController = {removeOrderById, updateOrder, addOrder, getOrderByName, getAllOrders};
export default OrderController;