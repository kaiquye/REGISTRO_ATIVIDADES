import Axios from 'axios';
import { getToken } from '../configs/ReactAdal';

export const APILOGIN = await function(){
    return Axios.create({
        baseURL : 'http://localhost:8081/api/',
    });
}