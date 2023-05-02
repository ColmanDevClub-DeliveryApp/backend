import {Restaurant} from '../models/restScheme.js';
import RestaurantApi from '../services/restaurant.services.js';

function addRestaurant(req){
    const { 
        name,
        shownName,
        description, 
        street, 
        city, 
        zip, 
        phone,
        openingHours, 
        image,
        deliveryTime,
        deliveryCose,
        category
    } = req.body;
   const restaurant = new Restaurant({
        name: name.toLowerCase(),
        shownName,
        description, 
        address: {
            street, 
            city, 
            zip
        },
        phone,
        openingHours, 
        image,
        deliveryTime,
        deliveryCose,
        category
   })
   RestaurantApi.addRestaurant(restaurant);
}

const RestaurantController = {addRestaurant};

export default RestaurantController;