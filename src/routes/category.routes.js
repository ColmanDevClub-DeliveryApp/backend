import express from "express";
const router = express.Router();

/**
 * return list of the shops in the category.
 */

//TODO check if this category is valid in the DB if not return 404
router.get('/:category', (req, res)=>{
    const {category} = req.params;
    res.send(`You requested category ${category}`);
});

export default router;