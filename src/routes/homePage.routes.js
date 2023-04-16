import express from "express"

import { User } from "../models/userScheme.js"
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('Home Page');
});

 
//  don't remove this comment until we fix the problem with the ref in our Schema

// router.post('/signup', async (req, res)=>{
//     const {firstName, lastName , email, password, phone} = req.body;
//     const user = new User({
//         firstName,
//         lastName,
//         email,
//         password,
//         phone
//     })

//     try {
//         const newUser = await user.save();
//         res.send(newUser);
//     } catch (error) {
//         console.log(error);
//     }
// });

router.post('/signin', async (req, res)=>{
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(user){
        if(user.password === password){
            res.send(user);
        }else{
            res.send('Wrong password');
        }
    }else{
        res.send('User not found');
    }
});

export default router;