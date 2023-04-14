import express from "express";
const router = express.Router();


/**
 * return the specified dish.
 */

//TODO check if this id is valid in the DB if not return 404
router.get('/:id', (req, res)=>{
    const {id} = req.params;
    res.send(`You requested dish ${id}`);
});


export default router;