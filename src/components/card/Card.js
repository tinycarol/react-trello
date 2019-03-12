import React from 'react';
import trelloService from '../../services/TrelloService';
import './Card.css';

export default (props) => {
  const onClickDelete = () => {
    trelloService.deleteCard(props.id)
      .then(props.onDelete)
  }
  return (
    <div className="Card card mb-2">
      {props.imageURL && <img src={props.imageURL} className="card-img-top" alt="..." />}
      <span className="btn-delete-card text-danger" onClick={onClickDelete}><i className="fa fa-times"></i></span>
      <div className="card-body">
        <p className="card-text">{props.title}</p>
        {props.description && <p className="card-text"><small className="text-muted">{props.description}</small></p>}
      </div>
    </div>
  );
};