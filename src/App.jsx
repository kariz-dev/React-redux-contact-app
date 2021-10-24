import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Home } from './pages/Home';
import { Edit } from './pages/Edit';
import { Add } from './pages/Add';
import { Nav } from './components/Nav';



class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
        <Route path="/add">
            <Add />
          </Route>
          <Route path="/edit">
            <Edit />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App
