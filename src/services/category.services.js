import {Category} from "../models/categoryScheme.js";

/**
 * @param {*} catalog type Category | catalog that will be added to database
 * @returns type String | id of added catalog
 */
const add = async (catalog) => {
    try {
        const DB_catalog = await catalog.save()
        if(DB_catalog){
            return DB_catalog._id
        }    
    } catch (error) {
        console.log(error);
    }
}

/**
 * @param {*} id type String | id of catalog that will be returned
 * @returns type Category | catalog from database
 */
const getById = async (id) => {
    const catalog = await Category.findById(id)
    if(catalog) {
        return catalog;
    }
    console.log(error);
}


/**
 * @param {*} title type String | title of catalog that will be returned
 * @returns type Category | catalog from database
 */
const getByTitle = async (title) => {
    const catalog = await Category.findOne({title})
    if(catalog) {
        return catalog;
    }
    console.log(error);
}

/**
 * @returns type Array | all catalogs from database
 */
const getAll = async () => {
    const catalogs = await Category.find()
    if(catalogs) {
        return catalogs
    }
    console.log(error);
}

/**
 * @param {*} id type String | id of catalog that will be updated
 * @param {*} catalog type Category | new catalog
 * @returns type String | id of updated catalog
 */
const update = (id, catalog) => {
    try {
        const updatedCatalog = Category.findByIdAndUpdate(id, catalog);
        return updatedCatalog._id
    } catch (error) {
        console.log(error);
    }
}

/**
 * @param {*} id type String | id of catalog that will be deleted
 */
const removeById = (id) => {
    try {
        Category.deleteOne(_id == id)
    } catch (error) {
        console.log(error);
    }
}

// const CategoryApi = {getAllCategories, getCategoryByTitle, updateCategory, addCatalog, getCategoryById};
const CategoryApi = {add, getAll, getById, getByTitle, removeById, update};
export default CategoryApi;