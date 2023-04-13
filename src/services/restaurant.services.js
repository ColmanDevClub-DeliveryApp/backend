

const getRestaurantById = async (id)=> {
    return await Restaurant.findById(id);
}

const getAllRestaurant = async ()=> {
    return await Restaurant.find();
}
const getRestaurantByName = async (name)=> {
    return await Restaurant.findOne({name});
}

const RestaurantApi = {getAllRestaurant, getRestaurantById, getRestaurantByName};

export default RestaurantApi;