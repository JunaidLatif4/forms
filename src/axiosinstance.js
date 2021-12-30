import axios from "axios"

let axiosInstance = axios.create({
    baseURL: "https://cors-handle.herokuapp.com/http://5.182.33.224/"
})

export default axiosInstance
