import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Theme } from './components/ThemeProvider.js'
import { Box, ThemeProvider } from '@mui/material'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(



  <React.StrictMode>
  <ThemeProvider theme={Theme}>
  <Box bgcolor={'background.default'} color={'text.primary'}>
      <App />
      </Box>
  </ThemeProvider>  
  </React.StrictMode>,
)
