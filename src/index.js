//jshing esversion: 6
import express from "express";
import mongoConnect from "./config/mongoConnect.js";
import dotenv from 'dotenv';
import dishesRoutes from './routes/dishes.routes.js';
import restaurantRoutes from './routes/restaurant.routes.js';
import categoryRoutes from './routes/category.routes.js';
import notFoundRoutes from './routes/notFound.routes.js';
import homeRoutes from './routes/homePage.routes.js';
import RestaurantApi from "./services/restaurant.services.js"; 
import cors from 'cors'

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors())
const PORT = 8080;

app.use('/', homeRoutes);
app.use('/dishes', dishesRoutes);
app.use('/restaurants', restaurantRoutes);
app.use('/category', categoryRoutes);
app.use('*', notFoundRoutes);

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`);
    mongoConnect();
});