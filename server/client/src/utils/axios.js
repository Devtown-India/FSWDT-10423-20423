import axios from 'axios'
import {toast} from 'react-hot-toast'

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 5000,
    headers:{

    }
})

instance.interceptors.response.use(
    (response)=>response.data,
    (error)=>{
        toast.error(error.response?.data?.message || "Something went wrong")
        console.log(error);
        return Promise.reject(error);
    }
)

export default instance;