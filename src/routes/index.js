import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Start from '../pages/Start';
import Home from '../pages/Home';
import AboutMe from '../pages/AboutMe';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Start } />
        <Route path="/home" component={ Home } />
        <Route path="/about" component={ AboutMe } />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;