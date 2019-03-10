import React from 'react';
import Card from './Card';
import trelloService from '../services/TrelloService.js';
import { Link } from 'react-router-dom';

export default ({ id, title, cards, fetchColumns }) => {
  const deleteColumn = () => {
    trelloService.deleteColumn(id)
      .then(fetchColumns)
  }

  return (
    <div className="col-2 mb-3">
      <div className="rounded border p-3 bg-light">
        <h6>{title}</h6>

        <div>
          {cards.map((card) => (
            <Card {...card} key={card.id} />
          ))}
        </div>

        <div className="mb-2">
          <Link className="btn btn-sm btn-primary" to={`/columns/${id}/new_card?position=${cards.length + 1}`}>
            Add Card
          </Link>
        </div>

        <button className="btn btn-sm btn-danger" onClick={deleteColumn}>Delete</button>
      </div>
    </div>
  );
}
