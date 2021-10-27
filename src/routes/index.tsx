import React from 'react';

import { Route, Switch, BrowserRouter } from 'react-router-dom';

import NotFound from '../components/NotFound';
import Dashboard from '../pages/app/dashboard';
import Landing from '../pages/app/landing';

import Works from '../pages/app/works';
import About from '../pages/app/about';

export default function Routes() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}
