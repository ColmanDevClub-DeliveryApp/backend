import {Category} from "../models/categoryScheme.js";

const addCatalog = async (catalog)=> {
    try {
        await catalog.save()
    } catch (error) {
        console.log(error);
    }
}

const getAllCategories = async () => {
    return await Category.find();
}

const getCategoryByTitle = async (title) => {
    return await Category.findOne({title});
}

const getCategoryById = async (id) => {
    return await Category.findById(id)
}

const updateCategory = async (category)=> {
    return await Category.findOneAndUpdate(category.title, category)
}

const CategoryApi = {getAllCategories, getCategoryByTitle, updateCategory, addCatalog, getCategoryById};
export default CategoryApi;