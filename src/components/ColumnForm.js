import React, { Component } from 'react';
import trelloService from '../services/TrelloService.js';

const validators = {
  title: (value) => value.length > 0 && value.length < 100
}

export class ColumnForm extends Component {
  state = {
    column: {
      title: ''
    },
    errors: {
      title: true
    },
    touch: {
      title: false
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    const isValid = validators[name](value);

    this.setState({
      column: {
        ...this.state.column,
        [name]: value
      },
      errors: {
        ...this.state.errors,
        [name]: !isValid
      }
    })
  }

  handleBlur = (e) => {
    const { name } = e.target;

    this.setState({
      touch: {
        ...this.state.touch,
        [name]: true
      }
    })
  }

  createColumn = (e) => {
    e.preventDefault();

    const columnData = {
      ...this.state.column,
      position: this.props.nextPosition
    }

    trelloService.createColumn(columnData)
      .then(this.props.fetchColumns)
  }

  render() {
    const { column, touch, errors } = this.state;

    const anyError = Object.values(errors).some(error => error);

    return (
      <div className="col-2 mb-3">
        <form onSubmit={this.createColumn} className="rounded border p-3">
          <div className="form-group">
            <input
              type="text"
              className={`form-control form-control-sm ${touch.title ? (errors.title ? 'is-invalid' : 'is-valid') : ''}`}
              id="title"
              placeholder="Column title"
              value={column.title} onChange={this.handleChange}
              onBlur={this.handleBlur}
              name="title"
            />
            
              <div className="valid-feedback">
                Looks good!
              </div>
            
              <div className="invalid-feedback">
                Invalid title
              </div>
          </div>

          <button type="submit" className="btn btn-primary btn-sm btn-block"
            disabled={anyError}>Add column</button>
        </form>
      </div>
    );
  }
}