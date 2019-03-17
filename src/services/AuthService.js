import http from './BaseService';

const authenticate = (user) => http.post('/authenticate', user)
  .then(response => response.data);

const register = (user) => http.post('/register', user)
  .then(response => response.data);

const logout = (user) => http.post('/logout')
  .then(response => response.data);

export default {
  authenticate,
  register,
  logout
}