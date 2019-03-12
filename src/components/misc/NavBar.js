import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="navbar-brand" to="/board">Iron Trello</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="mainNavbar">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/board">Board</NavLink>
        </li>
      </ul>
      <ul className="navbar-nav my-2 my-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/register">Register</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);