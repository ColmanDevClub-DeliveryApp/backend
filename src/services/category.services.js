import {CategoryScheme} from "../models/categoryScheme.js";

const getAllCategories = async () => {
    return await CategoryScheme.find();
}

const getCategoryByName = async (name) => {
    return await CategoryScheme.findById(name);
}

const CategoryApi = {getAllCategories, getCategoryByName};
export default CategoryApi;