import axios from 'axios';


const isDevelopment = import.meta.env.MODE === 'development';
const  URL = isDevelopment ? import.meta.env.VITE_API_BASE_URL_LOCAL : import.meta.env.VITE_API_BASE_URL_PROD;

const AxiosInstance = axios.create({
    baseURL: URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        accept: 'application/json'
    }
    
})

export default AxiosInstance;