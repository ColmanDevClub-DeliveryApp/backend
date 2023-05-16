import { Category } from "../models/categoryScheme.js";

/**
 * @param {*} catalog type Category | catalog that will be added to database
 * @returns type String | id of added catalog
 */
const add = async (catalog) => {

    try {
        catalog.restaurants = []
        const newCatalog = new Category({title: catalog.title, subtitle: catalog.subtitle, restaurants: catalog.restaurants})
        const DB_catalog = await newCatalog.save()
        if(DB_catalog){
            return DB_catalog._id
        }    
    } catch (error) {
        console.log(error);
    }
};

/**
 * @param {*} id type String | id of catalog that will be returned
 * @returns type Category | catalog from database
 */
const getById = async (id) => {
  try {
    const catalog = await Category.findById(id);
    if (catalog) {
      return catalog;
    }
  } catch (error) {
    console.log(error);
  }
};

/**
 * @param {*} title type String | title of catalog that will be returned
 * @returns type Category | catalog from database
 */
const getByTitle = async (title) => {

    try{
        console.log(title);
        const catalog = await Category.findOne({title: title})
        if(catalog) {
            return catalog;
        }
    } catch (error) {
        console.log("Error in getByTitle");
    }
};

/**
 * @returns type Array | all catalogs from database
 */
const getAll = async () => {
  try {
    const catalogs = await Category.find().populate("restaurants");
    if (catalogs) {
      return catalogs;
    }
  } catch (error) {
    console.log(error);
  }
};

/**
 * @param {*} id type String | id of catalog that will be updated
 * @param {*} catalog type Category | new catalog
 * @returns type String | id of updated catalog
 */

const update = async (id, catalog) => {
    try {
        const updatedCatalog = await Category.findByIdAndUpdate(id, catalog);
        return updatedCatalog._id
    } catch (error) {
        console.log(error);
    }
}

/**
 * @param {*} id type String | id of catalog that will be deleted
 */

const removeById = async(id) => {
    try {
        await Category.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
    }
}

// const CategoryApi = {getAllCategories, getCategoryByTitle, updateCategory, addCatalog, getCategoryById};
const CategoryApi = { add, getAll, getById, getByTitle, removeById, update };
export default CategoryApi;
