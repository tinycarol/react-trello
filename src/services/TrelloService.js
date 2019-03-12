import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3001',
  withCredentials: true
});

const getColumns = () => http.get('/columns').then(response => response.data);

const createColumn = (column) => http.post('/columns', column);

const deleteColumn = (id) => http.delete(`/columns/${id}`);

const createCard = (card) => {
  const data = new FormData();
  Object.keys(card).forEach(key => {
    console.log(key, card[key]);
    data.append(key, card[key]);
  })

  return http.post('/cards', data);
}

const deleteCard = (id) => http.delete(`/cards/${id}`);

export default {
  getColumns,
  createColumn,
  deleteColumn,
  createCard,
  deleteCard
};
