import axios from 'axios';
import config from './config.json';

const { baseURL } = config['production'];

const api = axios.create({
  baseURL,
});

export default api;
