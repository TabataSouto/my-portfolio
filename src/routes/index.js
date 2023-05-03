import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Start from '../pages/Start';
import Home from '../pages/Home';
import AboutMe from '../pages/AboutMe';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import HardSkills from '../pages/HardSkills';
import SoftSkills from '../pages/SoftSkills';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Start } />
        <Route path="/home" component={ Home } />
        <Route path="/about" component={ AboutMe } />
        <Route path="/projects/" component={ Projects } />
        <Route path="/contact" component={ Contact } />
        <Route path="/hard-skills" component={ HardSkills } />
        <Route path="/soft-skills" component={ SoftSkills } />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;