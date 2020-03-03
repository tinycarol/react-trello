import React, { Component } from 'react';
import { getColumns } from '../../services/TrelloService';
import Column from './Column';
import './Columns.css';
import { Redirect } from 'react-router-dom';

export default class Columns extends Component {
	state = {
		columns: [],
		error: undefined,
		redirect: false
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

	redirect() {
		this.setState({ redirect: true })
	}

	render() {
		if (this.state.redirect) {
			return (<Redirect to="/pepe" />)
		}
		const columns = this.state.columns.map(column => <Column key={column.id} {...column} />)
		return (
			<div className='Columns'>
				<button onClick={() => this.redirect()}>Redirect</button>
				{columns}
			</div>
		)
	}

}