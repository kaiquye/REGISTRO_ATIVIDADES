import Axios from 'axios';
import { getToken } from '../configs/ReactAdal';

export const ApiDefault = Axios.create({
    baseURL: 'http://localhost:8081/api/',
    headers: { 'X-Custom-Header': getToken() }
})