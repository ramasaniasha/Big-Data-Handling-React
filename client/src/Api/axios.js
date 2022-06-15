import axios from "axios";

export default axios.create({
    // baseURL: 'https://countriesnow.space/api/v0.1/countries/population'
    baseURL : 'http://localhost:3002/cities'
});