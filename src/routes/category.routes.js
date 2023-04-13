import express from "express";
const router = express.Router();

/**
 * return list of the shops in the category.
 */
router.get('/:id', (req, res)=>{
    const {id} = req.params;
    res.send(`You requested category ${id}`);
});

export default router;