import {User} from '../models/userScheme'

const getAllUsers = async () => {
    return await User.find();
}

const getUserById = async (id) => {
    return await User.findById(id);
}

const getUserByEmail = async (email) => {
    return await User.findOne({email});
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

const UserApi = {getAllUsers, getUserById, getUserByEmail, addUser, removeUser, updateUser};

export default UserApi;