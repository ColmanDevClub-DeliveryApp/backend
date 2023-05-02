import express from "express";
import UserApi from "../services/user.services.js";
import notFoundRoutes from "../routes/notFound.routes.js";
const router = express.Router();



/**
 * return all users.
 */
router.get("/", async (req, res) => {
    const users = await UserApi.getAllUsers();
    res.send(`${users}`);
});

/**
 * return the specified user.
 */
router.get("/:name", async (req, res) => {
    const { name } = req.params;
    if (name) {
        const user = await UserApi.getUserByName(name);
        if (user) {
            res.send({user});
        } else {
            return notFoundRoutes(req, res);
        }
    }else{
        return notFoundRoutes(req, res);
    }
});


export default router


