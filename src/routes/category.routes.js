import express from "express";
import CategoryController from "../controllers/category.controller.js";
import CategoryApi from "../services/category.services.js";
const router = express.Router();

/**
 * return list of all categories.
 */
router.get('/',  async(req, res)=>{
    res.send(await CategoryApi.getAllCategories());
});

/**
 * Get category by name
 * params/body: title = the category title (unique)
 */
router.get('/:title', async (req, res)=>{
    res.send(await CategoryApi.getCategoryByTitle(req.params.title))
});

/**
 * Add new catalog
 * params/body: {categoryName (unique), catalog subtitle}
 */
 router.post('/', (req,res)=> {
    res.send(CategoryController.addCatalog(req))
})

/**
 * Add restaurant to catalog
 * params/body: {title (unique), restaurantID}
 */
router.post('/add-rest', (req,res)=> {
    res.send(CategoryController.addRestaurantToCatalog(req))
})

/**
 * Remove restaurant From catalog
 * params/body: {categoryName (unique), restaurantID}
 */
router.delete('/remove-rest', (req,res)=> {
    res.send(CategoryController.removeRestaurantFromCatalog(req))
})

/**
 * Update category
 * params/body: {categoryName (unique), subtitle, restaurant (Array - DONT CHANGE)}
 */
router.put('/', (req, res)=> {
    //todo: connect to controller
})

export default router;