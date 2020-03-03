import axios from 'axios';

const http = axios.create({
	baseURL: process.env.REACT_APP_TRELLO_API || 'http://localhost:5000',
	withCredentials: false
});

export const getColumns = () => http.get('/columns').then(res => res.data); 
export const editColumn = (id, column) => http.patch(`/columns/${id}`, column).then(res => res.data); 
export const deleteColumn = (id) => http.delete(`/columns/${id}`).then(res => res.data); 
export const addColumn = (column) => http.post(`/columns`, column).then(res => res.data); 

export const getCards = () => http.get('/cards').then(res => res.data); 
export const editCard = (id, card) => http.patch(`/cards/${id}`, card).then(res => res.data); 
export const deleteCard = (id) => http.delete(`/cards/${id}`).then(res => res.data); 
export const addCard = (card) => http.post(`/cards`, card).then(res => res.data); 
