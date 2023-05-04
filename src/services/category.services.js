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

const updateCategory = async (category)=> {
    console.log(`updateCategory: ${category.title}, ${category.subtitle}`);
    // const categoryInDB = getCategoryByName(category.title)
    return await Category.findOneAndUpdate(category.title, category)
}

const CategoryApi = {getAllCategories, getCategoryByTitle, updateCategory, addCatalog};
export default CategoryApi;