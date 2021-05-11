import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-635ef-default-rtdb.firebaseio.com//'
});

export default instance;