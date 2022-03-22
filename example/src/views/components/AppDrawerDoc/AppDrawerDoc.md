````jsx

//imports...

const menu = [
    {
      name: 'UPM REACT-UI',
      icon: <HomeIcon />,
      uri: routes.introduction,
      id: '#home'
    },
    {
      name: 'Componentes',
      icon: <ReactIcon />,
      id: '#components',
      grouped: true,
      children: [
        {
          name: 'Layout',
          children: layout
        },
        {
          name: 'Botones',
          uri: '/',
          id: '#buttons',
          children: buttons
        },
        {
          name: 'Datos',
          children: data
        },
        {
          name: 'Utils',
          children: utils
        },
        {
          name: 'providers',
          children: providers
        }
      ]
    },
    {
      name: 'Hooks',
      icon: <HookIcon />,
      uri: '/',
      grouped: false,
      id: '#Hooks',
      children: hooks
    }
  ]

const App = () => {
  return (
          <div>
            <LayoutProvider defaultOpen>
              <div className={classes.root}>
                <AppDrawer menu={menu} permanent />

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



