import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from './App';
import Dashboard from './dashboard';

class Routersample extends Component {
  render() {
    return (
      <Router >
        <Switch>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/" component={App}/>
        </Switch>
      </Router>
    )
  }
};
export default Routersample;