import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3001',
  withCredentials: true
});

const authenticate = (user) => http.post('/authenticate', user)
  .then(response => response.data);

export default {
  authenticate
}