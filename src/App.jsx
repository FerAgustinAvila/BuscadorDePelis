import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import { Home } from './pages/Home.jsx'
import { Detail } from './pages/Detail.jsx'
import { NotFound } from './pages/NotFound.jsx'

import './App.css';
import 'bulma/css/bulma.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/detail/:movieId' component={Detail} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
