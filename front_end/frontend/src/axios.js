import axios from "axios";

const instance = axios.create({
    baseURL:"https://saloon-spm-backend.herokuapp.com",
});


export default instance;
