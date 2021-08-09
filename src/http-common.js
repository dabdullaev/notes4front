import axios from "axios";

export default axios.create({
    //baseURL: "http://localhost:8080/api",
    baseURL: "https://notes4back.herokuapp.com/api",
    headers: {
        "Content-type": "application/json"
    }
})