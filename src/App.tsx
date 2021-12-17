import React, { Fragment } from 'react'

import { createTheme, ThemeProvider } from '@material-ui/core'
import { BrowserRouter as Router } from 'react-router-dom'

import { ToastContainer } from 'react-toastify'

import Routes from './routes'
import GlobalStyle from './components/GlobalStyle'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes />
      <ToastContainer autoClose={3000} />
    </Router>
  )
}

export default App
