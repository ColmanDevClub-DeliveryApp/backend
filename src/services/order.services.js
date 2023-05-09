import { Order } from '../models/orderSchema.js';

/**
 * 
 * @returns type Array | array of orders
 */
const getAll = async ()=>{
    try{
        const orders = await Order.find();
        if(orders){
            return orders;
        }
    }catch (error){
        console.log(error);
    }
}

/**
 * @param {*} name type String | order name
 * @returns | return order
 */
const getByName = async (name)=>{
    try{
        const order = await Order.findOne({name})
        if(order){
            return order;
        }
    }catch (error){
        console.log(error);
    }
};

/**
 * @param {*} order | order object
 * @returns | return new order
 */
const add = async (order)=>{
    try {
        const newOrder = await order.save();
        if(newOrder){
            return newOrder._id;
        }
    } catch (error) {
        console.log(error);
    }
}

/**
 * 
 * @param {*} id 
 * @param {*} order 
 */
const update = async (id, order)=>{
    try{
        const updateOrder = await Order.findByIdAndUpdate(id, order);
        if(updateOrder){
            return updateOrder._id;
        }
    }catch (error){
        console.log(error);
    }
}

/**
 * @param {*} id type String | order id
 */
const remove = async (id)=>{
    try{
        await Order.deleteOne({_id: id});
    }catch (error){
        console.log(error);
    }
}

const OrderApi = { getAll, getByName, add, update, remove};

export default OrderApi;