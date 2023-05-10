import { Category } from "../models/categoryScheme.js";
import CategoryApi from "../services/category.services.js";

async function addRestaurantToCatalog(req, res, next){
    const { title, id } = req.body;
    const catalog = await CategoryApi.getCategoryByTitle(title)
    console.log(catalog);
    if(catalog){
        if(catalog.restaurants.filter(item=> item == id).length > 0){
            console.log('rest already in this catalog');
            return
        }
        catalog.restaurants.push(id)
        CategoryApi.updateCategory(catalog);
    }else {
        console.log('Dont find any catalog by this name');
        //todo: return error message to frontend
    }
}

async function removeRestaurantFromCatalog(req, res, next) {
    const { title, id } = req.body;
    const catalog = await CategoryApi.getCategoryByTitle(title)
    if(catalog){
        catalog.restaurants = catalog.restaurants.filter(item=> item!=id)
        CategoryApi.updateCategory(catalog);
        res.status(200).send(`Restaurant ${id} removed from catalog ${title}`)
    }
    else{
        //todo: return error message to frontend
        res.status(400).send(`Dont find any catalog by this name`)
    }
}

function addCatalog(req, res, next) {
    const {title, subtitle} = req.body;
    const restaurant = []
    const catalog = new Category({title, subtitle, restaurant})
    CategoryApi.addCatalog(catalog)
}

const CategoryController = {addRestaurantToCatalog, addCatalog, removeRestaurantFromCatalog};

export default CategoryController;