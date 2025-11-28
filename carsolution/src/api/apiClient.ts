import axios from "axios";

export const BACKENDURL = "http://localhost:8002/api";

const apiCLient = axios.create({
    baseURL: BACKENDURL,
    headers: {
        "Content-Type" : "application/json"
    }
})

export default apiCLient;