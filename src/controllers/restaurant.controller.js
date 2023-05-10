import {Restaurant} from '../models/restScheme.js';
import RestaurantApi from '../services/restaurant.services.js';
import CategoryApi from '../services/category.services.js'

async function addRestaurant(req, res, next){
//     const { name,shownName,description, street, city, zip, phone,openingHours, image,deliveryTime,deliveryCose,category} = req.body;
   
    const {catalog_id, restaurant} = req.body;
    const rest = new Restaurant({
        name: restaurant.name.toLowerCase(),
        shownName: restaurant.shownName,
        description: restaurant.description, 
        address: {
            street: restaurant.street, 
            city: restaurant.city , 
            zip: restaurant.zip
        },
        phone: restaurant.phone,
        openingHours: restaurant.openingHours, 
        image: restaurant.image,
        deliveryTime: restaurant.deliveryTime,
        deliveryCost: restaurant.deliveryCost,
        category: restaurant.category
   })
    // const rest = new Restaurant({...restaurant})
    const restaurant_id = await RestaurantApi.addRestaurant(rest)
    // console.log(typeof(restaurant_id));
    if(!restaurant_id){
        res.status(400).send(`Error, restaurant didnt created`)
    }else{
        const category = await CategoryApi.getCategoryById(catalog_id)
        category.restaurants.push(restaurant_id)
        CategoryApi.updateCategory(category);
    }
    
    // res.status(200).send(`restaurant ${restaurant_id} created and added to catalog ${catalog_id}`)

   // check category title (if exist) -> if false -> ERROR
//    RestaurantApi.addRestaurant(restaurant);
   // add to catalog -> catalogAPI
}

const RestaurantController = {addRestaurant};

export default RestaurantController;