import axios from "axios";  //imports axios
const instance = axios.create({
    baseURL: "http://openlibrary.org/search.json?q=",
});
export default instance;  //exports the instance