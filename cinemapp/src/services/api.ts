import axios from 'axios';

const api = axios.create({
  baseURL: `http://www.omdbapi.com/?apiKey=${process.env.REACT_APP_API_KEY}`,
});

export default api;
