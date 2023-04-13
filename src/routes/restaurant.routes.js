import express from "express";
const router = express.Router();

/**
 * return the specified restaurant.
 */
router.get('/:id', (req, res)=>{
    const {id} = req.params;
    res.send(`You requested restaurant ${id}`);
});

export default router;