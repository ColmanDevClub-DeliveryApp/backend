import { Category } from "../models/categoryScheme.js";
import CategoryApi from "../services/category.services.js";

async function addRestaurantToCatalog(req){
    const { title, id } = req.body;
    const catalog = await CategoryApi.getCategoryByTitle(title)
    console.log(catalog);
    if(catalog){
        if(catalog.restaurants.filter(item=> item == id)){
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

function addCatalog(req) {
    const {title, subtitle} = req.body;
    console.log(title, subtitle);
    const restaurant = []
    const catalog = new Category({title, subtitle, restaurant})
    console.log(catalog);
    CategoryApi.addCatalog(catalog)
}

const CategoryController = {addRestaurantToCatalog, addCatalog};

export default CategoryController;