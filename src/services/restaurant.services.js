
import { Restaurant } from "../models/restScheme"

const getById = (id)=> {
    return Restaurant.findById(id);
}
const getAll = ()=> {
    return Restaurant.find();
}