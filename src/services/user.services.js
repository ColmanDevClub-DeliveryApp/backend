import {User} from '../models/userScheme'

const getAll = async () => {
    const users = await User.find();
    if(users){
        return users;
    }
    console.log("No users found in getAll");
}

const getById = async (id) => {
    return await User.findById(id);
}

const getByEmail = async (email) => {
    return await User.findOne({email});
}

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

const removeById = (id) => {
    try{
        User.deleteOne(_id==id);
    } catch(err){
        console.log(err);
    }
}

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