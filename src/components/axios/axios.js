import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burgerbuilder-v2.firebaseio.com/',
});

export default instance;
