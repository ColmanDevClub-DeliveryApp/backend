import { User } from "../models/userScheme.js";

/**
 * @returns type Array | all users in database
 */
const getAll = async () => {
  try {
    const users = await User.find();
    if (users) {
      return users;
    }
  } catch (err) {
    console.log("error in getAll Users.");
  }
};

/**
 * @param {*} id type String
 * @returns User object or null
 */
const getById = async (id) => {
  return await User.findById(id);
};

/**
 * @param {*} id type String
 * @returns User object or null
 */
const getByEmail = async (email) => {
  return await User.findOne({ email });
};

/**
 * @param {*} user type User | user that will be added to database
 * @returns type String | the id of the added user
 */
const add = async (user) => {
  try {
    const newUser = new User({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      profilePicture: user.profilePicture,
      phoneNumber: user.phoneNumber,
      address: user.address,
      role: user.role,
      orders: user.orders,
      numOfOrders: user.numOfOrders,
      creditCardNumber: user.creditCardNumber,
    });
    const DB_user = await newUser.save();
    if (DB_user) {
      return DB_user._id;
    }
  } catch (err) {
    console.log(err);
  }
};

/**
 * @param {*} id type String | the id of the user that will be removed
 */
const removeById = async (id) => {
  try {
    await User.deleteOne({ _id: id });
  } catch (err) {
    console.log(err);
  }
};

/**
 * @param {*} id type String | the id of the user that will be changed
 * @param {*} user type User | new user that will be updated
 * @returns type String | the id of the updated user
 */
const update = async (id, user) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(id, user);
    if (updatedUser) {
      return updatedUser._id;
    }
  } catch (err) {
    console.log(err);
  }
};

const UserApi = { getAll, getById, getByEmail, add, removeById, update };

export default UserApi;
