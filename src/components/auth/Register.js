import React, { Component } from 'react'
import authService from '../../services/AuthService';
import { Redirect, Link } from 'react-router-dom';

const emailPattern = /(.+)@(.+){2,}\.(.+){2,}/i;

const validators = {
  email: (value) => {
    let error;
    if (!value || value === '') {
      error = 'Email is required';
    } else if (!emailPattern.test(value)) {
      error = 'Invalid email format'; 
    }
    return error;
  },
  password: (value) => {
    let error;
    if (!value) {
      error = 'Password is required';
    } else if (!value.length >= 8) {
      error = 'Password must contains at least 8 characters';
    }
    return error;
  }
}

export default class Register extends Component {

  state = {
    user: {
      email: '',
      password: ''
    },
    errors: {},
    touch: {},
    authenticated: false
  }

  onSubmit = (event) => {
    event.preventDefault();

    if (!this.hasErrors()) {
      authService.register(this.state.user)
      .then(
        (user) => this.setState({ authenticated: true }),
        (error) => {
          const { message, errors } = error.response.data;
          this.setState({
            errors: {
              ...this.state.errors,
              ...errors,
              password: message
            }
          })
        }
      )
    }
    
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      user: {
        ...this.state.user,
        [name]: value
      },
      errors: {
        ...this.state.errors,
        [name]: validators[name] && validators[name](value)
      }
    })
  }

  handleBlur = (event) => {
    const { name } = event.target;
    this.setState({
      touch: {
        ...this.state.touch,
        [name]: true
      }
    })
  }

  hasErrors = () => Object.keys(this.state.user)
    .some(attr => validators[attr] && validators[attr](this.state.user[attr]))
  
  render() {
    const { touch, errors, user } = this.state;
    if (this.state.authenticated) {
      return (<Redirect to="/login" />);
    } else {
      return (
        <div className="row justify-content-center mt-5">
          <div className="col-xs-12 col-3">
            <form onSubmit={this.onSubmit}>
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text"><i className="fa fa-envelope-o"></i></div>
                </div>
                <input type="text" className={`form-control ${touch.email && errors.email && 'is-invalid'}`} name="email" placeholder="Email" onChange={this.handleChange} value={user.email} onBlur={this.handleBlur} />
                <div className="invalid-feedback">{errors.email}</div>
              </div>
              
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text" style={{width: '42px'}}><i className="fa fa-lock"></i></div>
                </div>
                <input type="password" className={`form-control ${touch.password && errors.password && 'is-invalid'}`} name="password" placeholder="Password" onChange={this.handleChange} value={user.password} onBlur={this.handleBlur}/>
                <div className="invalid-feedback">{errors.password}</div>
              </div>

              <div className="from-actions">
                <button type="submit" className="btn btn-primary btn-block" disabled={this.hasErrors()}>Register</button>
              </div>
            </form>
            <hr />
            <p className="text-center">Already registered? <Link to="/login">Login</Link></p>
          </div>
        </div>
      );
    }
  }
}