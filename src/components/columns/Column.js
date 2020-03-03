import React from 'react';
import Card from '../cards/Card';
import './Column.css';

const Column = ({ id, title, position, cards = [] }) => {
	const cardComps = cards.map(card => <Card key={card.id} {...card} />);
	return (
		<div className="Column">
			<div className="ColumnTitle">{title}</div>
			{cardComps}
		</div>
	)
}

export default Column;