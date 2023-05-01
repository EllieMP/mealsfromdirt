import axios from 'axios';

const AxiosConfigured = () => {
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    axios.defaults.baseURL = `http://192.168.1.101:3607/api/v1/`;
    axios.defaults.withCredentials = true;

    return axios;
};


const axiosAgent = AxiosConfigured();

export default class APIInterface {

    async cordToBiome(lat, long) {
        return axiosAgent.get(`cord_to_biome/${lat}/${long}`);
    }

    async getCropsInBiome(crop_biome) {
        return axiosAgent.get(`crop_in_biome/${crop_biome}`);
    }

    async getBiomesOfCrop(crop_id) {
        return axiosAgent.get(`crop_in_biome/${crop_id}`);
    }

    async addCropBiomePair(crop_id, crop_biome) {
        return axiosAgent.get(`crop_in_biome/${crop_id}${crop_biome}`);
    }

    async getCropsWithTag(crop_tag) {
        return axiosAgent.get(`crop_tag/${crop_tag}`);
    }

    async addCropBiomePair(crop_id) {
        return axiosAgent.get(`crop_tag/${crop_id}`);
    }

    async addCropBiomePair(crop_id, crop_biome){
        return axiosAgent.get(`crop_tag/new/${crop_id}/${crop_biome}`);
    }

    async getCropsForRecipe(recipe_id) {
        return axiosAgent.get(`crop_in_biome/${recipe_id}`);
    }

    async getRecipesForCrop(crop_id) {
        return axiosAgent.get(`crop_in_biome/${crop_id}`)
    }

    async addCropRecipePair(recipe_id, crop_id) {
        return axiosAgent.get(`crop_in_biome/new/${recipe_id}/${crop_id}`);
    }

    async getCropByID(crop_id) {
        return axiosAgent.get(`/crops/${crop_id}`);
    }

    async updateCropNameByID(crop_id, crop_name) {
        return axiosAgent.get(`/crops/update/${crop_id}/${crop_name}`);
    }

    async getRecipeByID(recipe_id) {
        return axiosAgent.get(`recipe/${recipe_id}`);
    }

    async getRecipeByBiome(recipe_id) {
        return axiosAgent.get(`recipe/${recipe_id}`);
    }
}