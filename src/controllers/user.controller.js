import UserApi from "../services/user.services.js";

const getAllUsers = async (req, res, next) => {
  const users = await UserApi.getAll();
  res.send(users);
};

const getUserById = async (req, res, next) => {
  const { id } = req.params;
  const user = await UserApi.getById(id);
  res.send(user);
};

const getUserByEmail = async (req, res, next) => {
  const { email } = req.params;
  const user = await UserApi.getByEmail(email);
  console.log("HERE", user);
  return user;
};

const addUser = async (req, res, next) => {
  const { user } = req.body;
  const user_id = await UserApi.add(user);
  if (!user_id) {
    res.status(400).send("User not added");
  }
};

const removeUserById = async (req, res, next) => {
  const { id } = req.params;
  UserApi.removeById(id);
};

const updateUser = async (req, res, next) => {
  const { id, user } = req.body;
  UserApi.update(id, user);
};

const UserController = {
  updateUser,
  removeUserById,
  addUser,
  getUserByEmail,
  getAllUsers,
  getUserById,
};
export default UserController;
