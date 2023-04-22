import express from "express";
const router = express.Router();

/**
 * return list of the shops in the category.
 */
router.get('/:category', (req, res)=>{
    const {category} = req.params;
    res.send(`You requested category ${category}`);
});

export default router;