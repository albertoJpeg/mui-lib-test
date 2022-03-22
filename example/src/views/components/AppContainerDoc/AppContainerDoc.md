````jsx
//imports...

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
            <LayoutProvider defaultOpen>
              <div className={classes.root}>
                <main className={classes.content}>
                  <AppContainer>
                    <Router />
                  </AppContainer>
                </main>
              </div>
            </LayoutProvider>
          </div>
  )
}
export default App
````
