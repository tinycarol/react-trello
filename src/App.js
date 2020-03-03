import React, { Component } from 'react';
import './App.css';
import Columns from './components/columns/Columns';
import { Switch, Route } from 'react-router-dom';
import Pepe from './components/Pepe';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Columns} />
          <Route exact path="/pepe" component={Pepe} />
        </Switch>
      </div>
    );
  }
}

export default App;
