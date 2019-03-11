import React, { Component } from 'react';
import trelloService from '../services/TrelloService.js';
import { Redirect, Link } from 'react-router-dom';

const queryString = require('query-string');

const validators = {
  title: (value) => value.length > 0 && value.length < 100
}

export class NewCard extends Component {
  state = {
    card: {
      title: '',
      description: '',
      imageURl: '',
      attachment: ''
    },
    errors: {
      title: true
    },
    touch: {},
    toBoard: false
  }

  handleChange = (e) => {
    const { name, value, files } = e.target;

    const isValid = validators[name] === undefined || validators[name](value);

    this.setState({
      card: {
        ...this.state.card,
        [name]: (files && files[0]) ? files[0] : value
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

  createCard = (e) => {
    e.preventDefault();

    const cardData = {
      ...this.state.card,
      position: queryString.parse(this.props.location.search).position,
      column: this.props.match.params.columnId
    }

    trelloService.createCard(cardData)
      .then(() => this.setState({ toBoard: true }))
  }

  render() {
    const { toBoard, card, touch, errors } = this.state;

    const anyError = Object.values(errors).some(error => error);

    if (toBoard) {
      return <Redirect to="/board"/>
    }

    return (
      <div className="container p-3 border rounded">
        <form onSubmit={this.createCard} className="mb-3">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className={`form-control form-control-sm ${touch.title ? (errors.title ? 'is-invalid' : 'is-valid') : ''}`}
              id="title"
              placeholder="Card title"
              value={card.title} onChange={this.handleChange}
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

          <div className="form-group">
            <label htmlFor="imageUrl">Image</label>
            <input
              type="text"
              className={`form-control form-control-sm ${touch.imageURl ? (errors.imageURl ? 'is-invalid' : 'is-valid') : ''}`}
              id="imageURl"
              placeholder="Card imageURl"
              value={card.imageURl} onChange={this.handleChange}
              onBlur={this.handleBlur}
              name="imageURl"
            />

            <div className="valid-feedback">
              Looks good!
              </div>

            <div className="invalid-feedback">
              Invalid title
            </div>
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroupFileAddon01">Upload</span>
            </div>
            <div className="custom-file">
              <input 
                type="file" 
                className="custom-file-input" 
                name="attachment" id="attachment" 
                aria-describedby="attachment"
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                 />
              <label className="custom-file-label" htmlFor="attachment">Choose Attachment</label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              className={`form-control form-control-sm ${touch.description ? (errors.description ? 'is-invalid' : 'is-valid') : ''}`}
              id="description"
              placeholder="Card description"
              value={card.description} onChange={this.handleChange}
              onBlur={this.handleBlur}
              name="description"
            />

            <div className="valid-feedback">
              Looks good!
            </div>

            <div className="invalid-feedback">
              Invalid description
              </div>
          </div>

          <button type="submit" className="btn btn-primary btn-sm"
            disabled={anyError}>Add Card</button>
        </form>

        <Link to="/board" className="text-info">Back</Link>
      </div>
    );
  }
}