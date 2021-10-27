import React, { Fragment } from 'react';

import { createTheme, ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import Colors from './styles/Colors';
import history from './services/index';
import GlobalStyle from './components/GlobalStyle';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
    },
    palette: {
      primary: {
        main: Colors.primary.backgroundColor,
        contrastText: Colors.primary.textColor,
      },
      secondary: {
        main: Colors.secondary.backgroundColor,
        contrastText: Colors.secondary.textColor,
      },
      tonalOffset: 0.1,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Routes />
        <ToastContainer autoClose={3000} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
