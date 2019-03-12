import React, { Component } from 'react';
import './App.css';
import NavBar from './components/misc/NavBar';
import { Board } from './components/Board';
import { Switch, Route, Redirect } from 'react-router-dom';
import { NewCard } from './components/card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>

        <section>
          <div className="container-fluid pt-4">
            <Switch>
              <Route exact path="/columns/:columnId/new_card" component={NewCard} />
              <Route exact path="/board" component={Board}/>
              <Redirect to="/board"/>
            </Switch>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
