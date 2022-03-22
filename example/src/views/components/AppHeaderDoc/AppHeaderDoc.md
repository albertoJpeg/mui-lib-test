import React from 'react'
import { LayoutProvider } from 'upm-react-ui'

const Example = () => {

  const headerOptions = {
    logo: <Typography variant='caption' />,
    drawerButton: true,
    logoutText: 'Salir',
    rightMenu: [
      {
        icon: <HelpOutlineIcon />,
        ariaLabel: '',
        tooltip: 'Ayuda',
        handleState: setHelpOpen,
        isCollapseOpen: helpOpen,
        submenu: [
          {
            name: 'faq',
            onclick: () => null
          },
          {
            name: 'normative',
            onclick: () => null
          },
          {
            name: 'support',
            onclick: () => null
          }
        ]
      },
      {
        icon: <AlarmIcon />,
        tooltip: 'Alertas',
        ariaLabel: '',
        onclick: () => null
      }
    ],
    extraComponents: [
      <div
        key='customSearch-component'
        style={{
          display: 'inline-flex',
          padding: theme.spacing(1),
          verticalAlign: 'middle'
        }}
      >
        <CssTextField
          variant='outlined'
          size='small'
          InputProps={{
            startAdornment: (
              <SearchOutlined position='start' style={{ color: 'white' }} />
            )
          }}
        />
      </div>
    ]
  }
  
  return (
    <div>
      <LayoutProvider defaultOpen>
        <AppHeader
          drawerButton={headerOption.drawerButton}
          logo={headerOption.logo}
          logoutText={headerOption.logoutText}
          menu={headerOption.rightMenu}
          extraComponents={headerOption.extraComponents}
          user={{
            name: 'Nombre de usuario',
            surnames: 'Apellido de usuario',
            email: 'Email de usuario'
          }}
        />
      </LayoutProvider>
    </div>
  )
}
export default Providers
