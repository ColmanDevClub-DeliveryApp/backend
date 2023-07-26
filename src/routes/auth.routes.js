import express from "express";
import passport from "passport";
import bcrypt from "bcrypt";
import { User } from "../models/userScheme.js";
import authMiddleware from "../utils/auth.middleware.js";
import initializePassport from "../config/passport-config.js";
import UserController from "../controllers/user.controller.js";

const router = express.Router();

initializePassport(
  passport,
  (email) => User.find((user) => user.email === email),
  (id) => User.find((user) => user.id === id)
);

router.post(
  "/login",
  authMiddleware.validateLogin,
  passport.authenticate("local"),
  (req, res) => {
    // If authentication is successful, this callback function will be executed
    res.sendStatus(200); // Send a success status code (e.g., 200)
  }
);

router.get("/user/:email", async (req, res) => {
  console.log(req.params.email);
  const user = await UserController.getUserByEmail(req, res);
  res.json(user);
});

router.post(
  "/register",
  // authMiddleware.checkNotAuthenticated,
  authMiddleware.validateFields,
  async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const checkUser = await User.findOne({ email: req.body.email });
      if (checkUser) {
        return res.status(402).json({ error: "Email already exists" });
      }
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        phoneNumber: req.body.phoneNumber,
      });
      user.save();
      res.sendStatus(200);
    } catch {
      res.sendStatus(500);
    }
  }
);

router.delete("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/login");
  });
});

export default router;
