import express from "express";
const router = express.Router();


/**
 * return the specified dish.
 */
router.get('/:id', (req, res)=>{
    const {id} = req.params;
    res.send(`You requested dish ${id}`);
});


export default router;