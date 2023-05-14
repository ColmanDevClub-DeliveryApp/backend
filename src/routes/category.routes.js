import express from "express";
import CategoryController from "../controllers/category.controller.js";
const router = express.Router();

/**
 * return list of all categories.
 */
router.get('/', CategoryController.getAllCategories)

/**
 * Get category by name
 * params/body: title = the category title (unique)
 */
router.get('/:title', CategoryController.getCatalogByTitle)

/**
 * Add new catalog
 * params/body: {categoryName (unique), catalog subtitle}
 */
 router.post('/', CategoryController.addCatalog)

/**
 * Remove restaurant From catalog
 * params/body: {categoryName (unique), restaurantID}
 */
router.delete('/remove-rest', CategoryController.removeRestaurantFromCatalog)

/**
 * Remove catalog
 */
router.delete('/', CategoryController.removeCatalog)

/**
 * Update category
 * params/body: {categoryName (unique), subtitle, restaurant (Array - DONT CHANGE)}
 */
router.put('/', CategoryController.updateCatalog)

export default router;