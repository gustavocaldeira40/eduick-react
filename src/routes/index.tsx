import React from 'react';

import { Route, Switch } from 'react-router-dom';

import NotFound from '../components/NotFound';
import Dashboard from '../pages/dashboard';
import Landing from '../pages/landing';

import Works from '../pages/works';
import About from '../pages/about';

export default function Routes() {
  return (
    <Switch>
      {/* Dashboard */}
      <Route exact path="/Dashboard" component={Dashboard} />

      {/* Landing */}
      <Route exact path="/" component={Landing} />

      <Route path="/Works" component={Works} />
      <Route path="/About-us" component={About} />

      {/*  Page not found */}
      <Route component={NotFound} />
    </Switch>
  );
}
