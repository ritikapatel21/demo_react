import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppRoute from 'MainRoute.js'
import Login from 'containers/Login/Login.js';
import Registration from 'containers/Registration.js'
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Switch>
        <AppRoute />
      </Switch>
    );
  }
}

export default App;
