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
 * @param {*} order type object | order object
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
 *  @param {} id type String | the id of the order that will be change
 *  @param {} restaurant type String | the id of the updated order
 *  @returns | return updated order
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
const removeById = async (id)=>{
    try{
        await Order.deleteOne({_id: id});
    }catch (error){
        console.log(error);
    }
}

const OrderApi = { getAll, getByName, add, update, removeById};

export default OrderApi;