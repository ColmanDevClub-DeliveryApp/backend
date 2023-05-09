import {Category} from "../models/categoryScheme.js";

/**
 * @param {*} catalog type Category | catalog that will be added to database
 * @returns type String | id of added catalog
 */
const add = async (catalog) => {
    try {
        const DB_catalog = await catalog.save()
        if(DB_catalog){
            res.status(200)
            return DB_catalog._id
        }    
    } catch (error) {
        console.log(error);
        res.status(400)
    }
}

/**
 * @param {*} id type String | id of catalog that will be returned
 * @returns type Category | catalog from database
 */
const getById = async (id) => {
    const catalog = await Category.findById(id)
    if(catalog) {
        res.status(200)
        return catalog;
    }
    console.log(error);
    res.status(400)
}


/**
 * @param {*} title type String | title of catalog that will be returned
 * @returns type Category | catalog from database
 */
const getByTitle = async (title) => {
    const catalog = await Category.findOne({title})
    if(catalog) {
        res.status(200)
        return catalog;
    }
    console.log(error);
    res.status(400)
}

/**
 * @returns type Array | all catalogs from database
 */
const getAll = async () => {
    const catalogs = await Category.find()
    if(catalogs) {
        res.status(200)
        return catalogs
    }
    console.log(error);
    res.status(400)
}

/**
 * @param {*} id type String | id of catalog that will be updated
 * @param {*} catalog type Category | new catalog
 * @returns type String | id of updated catalog
 */
const update = (id, catalog) => {
    try {
        const updatedCatalog = Category.findOneAndUpdate(id, catalog);
        res.status(200)
        return updatedCatalog._id
    } catch (error) {
        console.log(error);
        res.status(400)
    }
}

/**
 * @param {*} id type String | id of catalog that will be deleted
 */
const removeById = (id) => {
    try {
        Category.deleteOne(_id == id)
        res.status(200)
    } catch (error) {
        console.log(error);
        res.status(400)
    }
}

// const CategoryApi = {getAllCategories, getCategoryByTitle, updateCategory, addCatalog, getCategoryById};
const CategoryApi = {add, getAll, getById, getByTitle, removeById, update};
export default CategoryApi;