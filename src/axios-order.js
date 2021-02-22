import axios from "axios";

const instance = axios.create({
    baseURL:"https://react-sandwich-app-4420a-default-rtdb.firebaseio.com/"
});

export default instance;