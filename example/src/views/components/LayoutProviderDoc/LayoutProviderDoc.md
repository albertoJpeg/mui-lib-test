import React from 'react'
import {
  AppContainer,
  AppHeader,
  LayoutProvider
} from 'upm-react-ui'

import { BrowserRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import { Router } from './routes/Router'
import { routes } from './routes/routes'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    minWidth: 0
  }
}))

const App = () => {
  const classes = useStyles()
  
  return (
    <div>
        <BrowserRouter>
          <LayoutProvider defaultOpen>
            <AppHeader drawerButton />
            <div className={classes.root}>
              <main className={classes.content}>
                <AppContainer>
                  <Router />
                </AppContainer>
              </main>
            </div>
          </LayoutProvider>
        </BrowserRouter>
    </div>
  )
}
export default App
