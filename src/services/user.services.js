import {User} from '../models/userScheme'

/**
 * @returns type Array | all users in database
 */
const getAll = async () => {
    const users = await User.find();
    if(users){
        return users;
    }
    console.log("No users found in getAll");
}

/**
 * @param {*} id type String
 * @returns User object or null
 */
const getById = async (id) => {
    return await User.findById(id);
}

/**
 * @param {*} id type String
 * @returns User object or null
 */
const getByEmail = async (email) => {
    return await User.findOne({email});
}

/**
 * @param {*} user type User | user that will be added to database
 * @returns type String | the id of the added user
 */
const add = async (user) => {
    try{
        const DB_user = await user.save();
        if(DB_user){
            return DB_user._id;
        }
    } catch(err){
        console.log(err);
    }
    
}

/**
 * @param {*} id type String | the id of the user that will be removed
 */
const removeById = (id) => {
    try{
        User.deleteOne(_id: id);
    } catch(err){
        console.log(err);
    }
}

/**
 * @param {*} id type String | the id of the user that will be changed
 * @param {*} user type User | new user that will be updated
 * @returns type String | the id of the updated user
 */
const update = (id, user) =>{
    try{
        const updatedUser = User.findByIdAndUpdate(id, user);
        return updatedUser._id;
    } catch(err){
        console.log(err);
    }
    
}

const UserApi = {getAll, getById, getByEmail, add, removeById, update};

export default UserApi;
