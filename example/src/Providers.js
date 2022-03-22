import React from 'react'
import { LayoutProvider } from 'upm-react-ui'

import { BrowserRouter } from 'react-router-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { AppLayoutExampleProvider } from './providers/AppLayoutExampleProvider'
import App from './App'

const theme = createMuiTheme({
  palette: {
    primary: {
      // main: '#3688AB'
      main: '#0789bc'
    },
    secondary: {
      main: '#F49E4C'
    },
    tertiary: {
      main: '#932981'
    },
    background: {
      default: '#fff'
    }
  },

  typography: {
    typography: {
      // In Chinese and Japanese the characters are usually larger,
      // so a smaller fontsize may be appropriate.
      fontSize: 16
    },
    fontFamily: ['Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
    h1: {
      margin: '16px 0',
      fontSize: 40,
      fontWeight: 400,
      lineHeight: 1.167,
      letterSpacing: '0em'
    },
    h2: {
      margin: '40px 0 16px',
      fontSize: 30,
      fontWeight: 400,
      lineHeight: 1.235,
      letterSpacing: '0.00735em'
    },
    body1: {
      fontWeight: 300
    }
  },
  overrides: {
    MuiCard: {
      root: {
        borderRadius: 8
      }
    }
  }
})

const Providers = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <AppLayoutExampleProvider>
          <BrowserRouter>
            <LayoutProvider defaultOpen>
              <App />
            </LayoutProvider>
          </BrowserRouter>
        </AppLayoutExampleProvider>
      </ThemeProvider>
    </div>
  )
}
export default Providers
