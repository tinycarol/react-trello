import React from 'react';
import trelloService from '../services/TrelloService';

export default (props) => {
  const onClickDelete = () => {
    trelloService.deleteCard(props.id)
      .then(props.onDelete)
  }
  return (
    <li className="Card border rounded mb-2 p-2 d-flex justify-content-between align-items-center">
      {props.title}
      <span className="text-danger" onClick={onClickDelete}><i className="fa fa-times"></i></span>
    </li>
  );
};