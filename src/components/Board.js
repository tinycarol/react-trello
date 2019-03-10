import React, { Component } from 'react';
import trelloService from '../services/TrelloService.js';
import Column from './Column.js';
import { ColumnForm } from './ColumnForm.js';

export class Board extends Component {
  state = {
    columns: []
  }

  fetchColumns = () => {
    trelloService.getColumns()
      .then(columns => this.setState({ columns }))
  }

  componentDidMount() {
    this.fetchColumns();
  }

  render = () => (
    <div className="Board row">
      {this.state.columns.map(column => (
        <Column {...column} key={column.id} fetchColumns={this.fetchColumns}/>
      ))}

      <ColumnForm nextPosition={this.state.columns.length} fetchColumns={this.fetchColumns}/>
    </div>
  );
}