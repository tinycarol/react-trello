import React, { Component } from 'react';
import { getColumns } from '../../services/TrelloService';
import Column from './Column';
import './Columns.css';

export default class Columns extends Component {
	state = {
		columns: [],
		error: undefined
	};

	componentDidMount() {
		getColumns().then(
			columns => {
				this.setState({
					columns: columns.slice(0, 10)
				})
			}
		).catch(
			error => this.setState({ error: error })
		);
	}

	render() {
		const columns = this.state.columns.map(column => <Column key={column.id} {...column} />)
		return (
			<div className='Columns'>
				{columns}
			</div>
		)
	}

}