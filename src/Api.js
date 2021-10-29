import axios from "axios";


const api = axios.create({
    baseUrl: 'https://opentdb.com/api.php?amount=',


});

export default api;