import React from 'react';
import './Add.css';

const Add = ({addFun}) => {
	return (
		<div className='Add'>
			<button className='AddButton' onClick={addFun}><i className="fa fa-plus"></i><span className='AddText'>Add card</span></button>
		</div>
	)
}

export default Add;