import {User} from '../models/userScheme.js'

const getAllUsers = async () => {
    return await User.find();
}

const getUserById = async (id) => {
    return await User.findById(id);
}

const getUserByEmail = async (email) => {
    return await User.findOne({email});
}

const getUserByName = async (name) =>{
    return await User.findOne({name});
}

const addUser = async (firstName, lastName, email, password, profilePic, phoneNumber, address, role, orders, numOfOrders, creditCardNumber) =>{
    try{
        const user= new User({
            firstName,
            lastName,
            email,
            password,
            profilePic,
            phoneNumber,
            address,
            role,
            orders,
            numOfOrders,
            creditCardNumber
        });
        await user.save();
    }catch(e){
        console.log(e);
    }
}

const removeUser = async (email) => {
    await User.deleteOne({email});
}

const updateUser = async (firstName, lastName, email, newEmail, password, profilePic, phoneNumber, address, role, orders, numOfOrders, creditCardNumber) =>{
    await User.findOneAndUpdate({email},
        {
            firstName,
            lastName,
            email:newEmail,
            password,
            profilePic,
            phoneNumber,
            address,
            role,
            orders,
            numOfOrders,
            creditCardNumber

        })
}

const UserApi = {getUserByName, getAllUsers, getUserById, getUserByEmail, addUser, removeUser, updateUser};

export default UserApi;