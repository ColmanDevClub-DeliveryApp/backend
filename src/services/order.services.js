import { Order } from '../models/orderSchema.js';

const getAllOrders = async ()=>{
    return await Order.find();
}

const getOrderByName = async (name)=>{
    return await Order.findOne({name});
};

const addOrder = async (deliveryPrice, dishes, user, restaurant)=>{
    const order = new Order({
        deliveryPrice,
        dishes,
        user,
        restaurant
    });
    try {
        const newOrder = await order.save();
    } catch (error) {
        console.log(error);
    }
}

const updateOrder = async (deliveryPrice, dishes, user, restaurant)=>{
    await Order.findOneAndUpdated ({user},
        {
            deliveryPrice,
            dishes,
            user,
            restaurant
        });
}

const OrderApi = {getAllOrders, getOrderByName, addOrder, updateOrder};

export default OrderApi;