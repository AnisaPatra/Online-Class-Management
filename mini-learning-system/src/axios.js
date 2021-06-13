import axios from 'axios';

const token = window.localStorage.getItem('token');
const api = "http://localhost:2000/";
const axiosInstance = axios.create({
    baseURL: api,
    headers: {
        'Authorization' : token ? `Bearer ${token}` : ''
    } 
})

export default axiosInstance;