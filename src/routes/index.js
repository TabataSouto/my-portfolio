import React from 'react';
import Start from '../pages/Start';
import Home from '../pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Start } />
        <Route path="/home" component={ Home } />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;