//jshing esversion: 6
import express from "express";
import mongoConnect from "./config/mongoConnect.js";
import dotenv from "dotenv";
import dishesRoutes from "./routes/dishes.routes.js";
import restaurantRoutes from "./routes/restaurant.routes.js";
import categoryRoutes from "./routes/category.routes.js";
import notFoundRoutes from "./routes/notFound.routes.js";
import homeRoutes from "./routes/homePage.routes.js";
import orderRoutes from "./routes/order.routes.js";
import authRoutes from "./routes/auth.routes.js";
import cors from "cors";

import session from "express-session";
import flash from "express-flash";
import passport from "passport";
const app = express();

app.use(flash());
app.use(
  session({
    secret: "fsdfdsfdsfdsfds",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

dotenv.config();

app.use(express.json());
app.use(cors());
const PORT = 8080;

app.use("/", homeRoutes);
app.use("/auth", authRoutes);
app.use("/dishes", dishesRoutes);
app.use("/restaurants", restaurantRoutes);
app.use("/category", categoryRoutes);
app.use("/order", orderRoutes);
app.use("*", notFoundRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  mongoConnect();
});
