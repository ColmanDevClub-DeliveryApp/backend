import {catalogScheme} from "../models/catalogScheme.js";

const getAllCategories = async () => {
    return await catalogScheme.find();
}

const getCategoryByName = async (name) => {
    return await catalogScheme.findById(name);
}

const CatalogApi = {getAllCategories, getCategoryByName};
export default CatalogApi;