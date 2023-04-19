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
        res.status(404).send(error.message)
    }
    
});

 router.post('/signup', async (req, res)=>{
    const {firstName, lastName , email, password, phone} = req.body;
    const user = new User({
        firstName,
        lastName,
        email,
        password: jwt.sign({password}, process.env.PASSWORD_KEY),
        phone
    })

    try {
        const newUser = await user.save();
        const savedUser = await User.findById(newUser._id).select('-password');
        res.send(savedUser);
    } catch (error) {
        res.status(404).send(error.message)
    }
});

router.post('/signin', async (req, res)=>{
    try{
        const {email, password} = req.body;
        if(!email || !password){
            throw new Error("Please enter all fields")
        }
        const user = await User.findOne({email});
        if(!user){
            throw new Error("User not found")
        }
        const userPassowrd = jwt.verify(user.password, process.env.PASSWORD_KEY).password
        if(userPassowrd !== password){
            throw new Error("Wrong email or password")
        }
        const accessToken = jwt.sign({email}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "1h"})
        user.accessToken = accessToken;
        res.send(accessToken);
    }catch(error){
        res.status(404).send(error.message)
    }
});

export default router;