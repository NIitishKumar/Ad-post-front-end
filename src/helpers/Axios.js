import axios from "axios";
import { isAuthenticated } from "./isAuthenticated";

let url = {
    prod:"https://ad-post.herokuapp.com",
    local:"http://localhost:9000"
}


const instance = axios.create({
    baseURL:url.prod,
    headers:{
        Authorization:`Bearer ${isAuthenticated && isAuthenticated()}`
    }
})

export default instance;