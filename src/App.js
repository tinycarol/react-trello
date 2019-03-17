import React, { Component } from 'react';
import './App.css';
import NavBar from './components/misc/NavBar';
import { Board } from './components/Board';
import { Switch, Route, Redirect } from 'react-router-dom';
import { NewCard } from './components/card';
import { Login, Register } from './components/auth';
import PrivateRoute from './guards/PrivateRoute';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>

        <section>
          <div className="container-fluid pt-4">
            <Switch>
              <PrivateRoute exact path="/columns/:columnId/new_card" component={NewCard} />
              <PrivateRoute exact path="/board" component={Board}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/register" component={Register}/>
              <Redirect to="/board"/>
            </Switch>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
