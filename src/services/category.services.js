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

/**
 * @param {*} req -> include {catlog: new Category}
 * @param {*} res 
 * @returns 
 */
const add = async (req, res) => {
    try {
        const {catalog} = req.body
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

const getById = async (req, res) => {
    const {id} = req.body
    const catalog = await Category.findById(id)
    if(catalog) {
        res.status(200)
        return catalog;
    }
    console.log(error);
    res.status(400)
}

const getByName = async (req, res) => {
    const {name} = req.body
    const catalog = await Category.findOne({name})
    if(catalog) {
        res.status(200)
        return catalog;
    }
    console.log(error);
    res.status(400)
}

const getAll = async (req, res) => {
    const catalogs = await Category.find()
    if(catalogs) {
        res.status(200)
        return catalogs
    }
    console.log(error);
    res.status(400)
}

const update = (req, res) => {
    try {
        const {id, catalog} = req.body
        const updatedCatalog = Category.findOneAndUpdate(_id == id, catalog);
        res.status(200)
        return updatedCatalog._id
    } catch (error) {
        console.log(error);
        res.status(400)
    }
}

const remove = (req, res) => {
    try {
        const {id} = req.body
        Category.deleteOne(_id == id)
        res.status(200)
    } catch (error) {
        console.log(error);
        res.status(400)
    }
}

// const CategoryApi = {getAllCategories, getCategoryByTitle, updateCategory, addCatalog, getCategoryById};
const CategoryApi = {add, getAll, getById, getByName, remove, update};
export default CategoryApi;