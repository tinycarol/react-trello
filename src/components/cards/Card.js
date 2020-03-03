import React from 'react';
import Label from './Label';
import './Card.css';

const Card = ({ title, description, labels, id, position }) => {
	const labelComps = <div className='Labels'>
		{labels.map((label, index) => <Label key={index}>{label}</Label>)}
	</div>;
	return (
		<div className='Card navigable navigable-default'>
			{labels.length > 0 ? labelComps : ''}
			<div className='CardTitle'>{title}</div>
		</div>
	)
}

export default Card;