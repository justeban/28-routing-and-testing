import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Dashboard from '../dashboard/index.js';
import Landing from '../landing/index.js';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route exact path="/" component={Landing} />
          <Route exact path="/dashboard" component={Dashboard} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}