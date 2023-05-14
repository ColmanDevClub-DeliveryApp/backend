import { Category } from "../models/categoryScheme.js";
import CategoryApi from "../services/category.services.js";

/**
 * @param {*} req has 'catalog_id' and 'restaurant_id' fields
 */
const removeRestaurantFromCatalog = async (req, res, next)=> {
    const {catalog_id, restaurant_id} = req.body;
    const catalog = await CategoryApi.getById(catalog_id)
    if(catalog){
        catalog.restaurants = catalog.restaurants.filter(item=> item._id != restaurant_id)
        CategoryApi.update(catalog._id, catalog);
    }else {
        res.status(405).send("Catalog not found")
    }
}

/**
 * @param {*} req has 'catalog' field and the value of this field has title and subtitle fields
 */
const addCatalog = async (req, res, next)=> {
    const {catalog} = req.body;
    const catalog_id = await CategoryApi.add(catalog)
    if (!catalog_id) {
        res.status(500).send("Something went wrong")
    }
    else {
        res.status(200).send(catalog_id)
    }
}

/**
 * @param {*} req has 'catalog_id' and 'catalog' fields
 */
const updateCatalog = async (req, res, next)=> {
    const {catalog_id, catalog} = req.body;
    const DB_catalog = await CategoryApi.getById(catalog_id)
    if(DB_catalog){
        DB_catalog.title = catalog.title
        DB_catalog.subtitle = catalog.subtitle
        CategoryApi.update(catalog_id, DB_catalog);
    }else {
        res.status(405).send("Catalog not found")
    }
}

const getAllCategories = async (req, res, next) => {
    const catalogs = await CategoryApi.getAll();
    res.send(catalogs);
}

/**
 * @param {*} req has 'title' field
 */
const getCatalogByTitle = async (req, res, next) => {
    const { title } = req.params;
    const catalog = await CategoryApi.getByTitle(title);
    res.send(catalog);
}

/**
 * @param {*} req has 'id' field
 */
const removeCatalog = async (req, res, next) => {
    const {id} = req.body;
    await CategoryApi.removeById(id);
}

const CategoryController = {addCatalog, removeRestaurantFromCatalog, updateCatalog, getAllCategories, getCatalogByTitle, removeCatalog};

export default CategoryController;