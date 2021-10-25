import React, { Fragment } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';
import GlobalStyle from './styles/globalStyle';

function App() {
  return (
    <Router basename="/">
      <GlobalStyle />
      <Routes />
    </Router>
  );
}

export default App;
