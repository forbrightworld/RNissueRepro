import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

let headers = {};

const axiosInstance = axios.create({
    baseURL : 'https://aintnobodyplayin.com/api/',
    headers,
});

axiosInstance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if(token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

axiosInstance.interceptors.response.use(
    (response) =>
        new Promise((resolve, reject) => {
            resolve(response);
        }),
    (error)  => {
        if(!error.response) {
            return new Promise((resolve, reject) => {
                reject(error);
            });
        }
    },
);

export default axiosInstance;