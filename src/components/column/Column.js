import React from 'react';
import { Card } from '../card';
import trelloService from '../../services/TrelloService.js';
import { Link } from 'react-router-dom';
import './Column.css';

export default ({ id, title, cards, fetchColumns }) => {
  const deleteColumn = () => {
    trelloService.deleteColumn(id)
      .then(fetchColumns)
  }

  return (
    <div className="col-2 mb-3">
      <div className="Column rounded border p-3 bg-light">
        <h6>{title}</h6>
        <div className="text-danger btn-delete-column" onClick={deleteColumn}><i className="fa fa-times"></i></div>

        <div>
          {cards.map((card) => (
            <Card {...card} key={card.id} onDelete={fetchColumns} />
          ))}
        </div>

        <div className="mt-3">
          <Link className="btn btn-sm btn-primary btn-block" to={`/columns/${id}/new_card?position=${cards.length + 1}`}>
            Add Card
          </Link>
        </div>
      </div>
    </div>
  );
}
