import express from "express";
import CatalogApi from "../services/category.services.js";
const router = express.Router();

/**
 * return list of the shops in the category.
 */

//TODO check if this category is valid in the DB if not return 404
router.get('/:category', (req, res)=>{
    const {category} = req.params;
    res.send(CatalogApi.getCategory(category));
});

/**
 * return list of all categories.
 */
router.get('/',  (req, res)=>{
    res.send(CatalogApi.getAllCategories());
});

export default router;