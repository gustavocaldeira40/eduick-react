import React, { Fragment } from 'react';

import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';
import StyledGlobal from './styles';

function App() {
  return (
    <Router basename="/">
      <CssBaseline />
      <StyledGlobal />
      <Routes />
    </Router>
  );
}

export default App;
