import axios from "axios";
import type { AxiosInstance } from "axios";


// export default axios.create({baseURL:"https://dummyjson.com"})

const commerceUrl:AxiosInstance=axios.create ({
    baseURL:"https://dummyjson.com",
    timeout:5000,
})

const loginUrl: AxiosInstance = axios.create({
    baseURL:"https://tarmeezacademy.com/api/v1",
    timeout:5000,
  });




export {commerceUrl , loginUrl}