import express from "express"
import jwt from "jsonwebtoken"
import { User } from "../models/userScheme.js"
const router = express.Router();

router.get('/', (req, res)=>{
    try{
        const accessToken = req.header("Authorization")
        if(!accessToken) throw new Error("no access token")

        const isValid = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)

        if(!isValid) throw new Error("invalid access token")

        res.send('Home Page');
    }catch(error){
        console.log(error);
    }
    
});

 
//  don't remove this comment until we fix the problem with the ref in our Schema
router.post('/signup', async (req, res)=>{
    const {firstName, lastName , email, password, phone} = req.body;
    const user = new User({
        firstName,
        lastName,
        email,
        password,
        phone
    })

    try {
        const newUser = await user.save();
        res.send(newUser);
    } catch (error) {
        console.log(error);
    }
});

router.post('/signin', async (req, res)=>{
    /*  ****** DONT REMOVE YET *********
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(user){
        if(user.password === password){
            res.send(user);
        }else{
            res.send('Wrong email or password');
        }
    }else{
        res.send('User not found');
    }
    */
    try{
        const {email, password} = req.body;
        if(!email || !password){
            throw new Error("Please enter all fields")
        }
        const user = await User.findOne({email});
        if(!user){
            throw new Error("User not found")
        }
        const accessToken = jwt.sign({email}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "1h"})
        user.accessToken = accessToken;
        res.send(accessToken);
    }catch(error){
        res.status(404).send(error.message)
    }
});

export default router;