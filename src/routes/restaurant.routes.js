import express from "express";
const router = express.Router();

/**
 * return the specified restaurant.
 */
router.get('/:restaurantName', (req, res)=>{
    const {restaurantName} = req.params;
    res.send(`You requested restaurant ${restaurantName}`);
});

export default router;