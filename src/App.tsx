import React, { Fragment } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';

import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import './App.css';

function App() {
  return (
    <Router basename="/">
      <Routes />
      <ToastContainer autoClose={3000} />
    </Router>
  );
}

export default App;
