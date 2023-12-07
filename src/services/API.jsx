import axios from 'axios';

axios.defaults.baseURL = 'https://60816d9073292b0017cdd833.mockapi.io/';

export const getModesAPI = async () => {
    try {
        const response = await axios.get('/modes');
        return response.data;
    } catch (error) {
        console.error('Error fetching modes:', error);
    }
};
