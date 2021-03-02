import axios from "axios";

export default axios.create({
    baseURL: "https://chingu-morseapp-v27.herokuapp.com",
    headers: {
        "content-type" : "application/json"
    }
});