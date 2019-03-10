import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <nav className="navbar navbar-dark bg-dark">
    <Link className="navbar-brand" to="/board">Iron Trello</Link>
  </nav>
);