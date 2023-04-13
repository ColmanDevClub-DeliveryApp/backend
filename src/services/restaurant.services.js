
import { Restaurant } from "../models/restScheme"

const getById = (id)=> {
    return Restaurant.findOne(id);
}
const getAll = ()=> {
    return Restaurant.find();
}