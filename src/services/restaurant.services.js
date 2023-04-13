
import { Restaurant } from "../models/restScheme.js"

const getById = (id)=> {
    return Restaurant.findOne(id);
}
const getAll = ()=> {
    return Restaurant.find();
}