import axios from "axios";
import type { AxiosInstance } from "axios";



const commerceUrl:AxiosInstance=axios.create ({
    baseURL:"https://dummyjson.com",
    timeout:5000,
    headers:{
      'Content-Type': 'multipart/form-data;',
      'Authorization': `Bearer ${window.localStorage.token}`    
    }
  })

const loginUrl: AxiosInstance = axios.create({
    baseURL:"https://tarmeezacademy.com/api/v1",
    timeout:5000,
    headers:{
      'Content-Type': 'multipart/form-data;',
      'Authorization': `Bearer ${window.localStorage.token}`    
    }
  });




export {commerceUrl , loginUrl}