import React from 'react';
import Start from '../pages/Start';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Start } />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;