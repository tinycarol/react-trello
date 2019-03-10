import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3001'
});

const getColumns = () => http.get('/columns').then(response => response.data);

const createColumn = (column) => http.post('/columns', column);

const deleteColumn = (id) => http.delete(`/columns/${id}`);

const createCard = (card) => http.post('/cards', card);

export default {
  getColumns,
  createColumn,
  deleteColumn,
  createCard
};
