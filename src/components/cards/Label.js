import React from 'react';
import './Label.css';

const Label = (props) => {
	const transformText = (text) => text.replace(" ", "").replace("!", "");
	return (
		<div className={`Label Label${transformText(props.children)}`}>
			{props.children}
		</div>
	)
}

export default Label;