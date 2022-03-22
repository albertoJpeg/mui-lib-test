import React, { useState } from 'react'
import { AppContainer, AppFooter, AppHeader, AppDrawer } from 'upm-react-ui'
import logo from './images/Logo2.png'

import {
  makeStyles,
  TextField,
  Typography,
  withStyles,
  useTheme
} from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import ReactIcon from './images/icons/ReactIcon'
import HookIcon from './images/icons/HookIcon'
import TemporaryDrawer from './TemporaryDrawer'
import { Router } from './routes/Router'
import { routes } from './routes/routes'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import AlarmIcon from '@material-ui/icons/Alarm'
import useLayoutExample from './hooks/useLayoutExample'
import { SearchOutlined } from '@material-ui/icons'
import { useLocation } from 'react-router-dom'

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
  const theme = useTheme()
  const { header, footer, drawer } = useLayoutExample()
  const [helpOpen, setHelpOpen] = useState(false)
  const classes = useStyles()
  const CssTextField = withStyles({
    root: {
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'white'
        },
        '&:hover fieldset': {
          borderColor: '#F49E4C'
        },
        '&.Mui-focused fieldset': {
          borderColor: '#F49E4C'
        }
      }
    }
  })(TextField)
  const { pathname } = useLocation()
  const buttons = [
    {
      name: 'LoadingButton',
      uri: routes.loadingButtonDoc,
      id: '#loadingButtonDOC'
    },
    {
      name: 'VerticalIconButton',
      uri: routes.verticalItemButtonDoc,
      id: '#VerticalIconButton'
    }
  ]
  const layout = [
    {
      name: 'AppHeader',
      uri: routes.appHeaderDoc,
      id: '#AppHeaderDoc'
    },
    {
      name: 'AppDrawer',
      uri: routes.AppDrawerDoc,
      id: '#AppDrawer'
    },
    {
      name: 'AppContainer',
      uri: routes.AppContainerDoc,
      id: '#AppContainer'
    },
    {
      name: 'AppFooter',
      uri: routes.appFooterDoc,
      id: '#AppFooterDoc'
    }
  ]
  const data = [
    {
      name: 'ComplexTable',
      uri: routes.ComplexTable,
      id: '#ComplexTable'
    },
    {
      name: 'SimpleTable',
      uri: routes.SimpleTable,
      id: '#SimpleTable'
    }
  ]
  const providers = [
    {
      name: 'LayoutProvider',
      uri: routes.LayoutProviderDoc,
      id: '#LayoutProviderDoc'
    }
  ]
  const hooks = [
    {
      name: 'UseLayoutDoc',
      uri: routes.useLayoutDoc,
      id: '#UseLayoutDoc'
    },
    {
      name: 'useWindowSize',
      uri: routes.useWindowSizeDoc,
      id: '#useWindowSize'
    }
  ]
  const utils = [
    {
      name: 'EmptyData',
      uri: routes.EmptyDataDoc,
      id: '#EmptyDataDoc'
    }
  ]
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
  const menuExample = [
    {
      name: 'upm-react-components',
      icon: <HomeIcon />,
      uri: routes.introduction,
      id: '#home'
    },
    {
      name: 'Componentes',
      icon: <ReactIcon />,
      id: '#Componentes',
      childrens: [...buttons, ...layout, ...data]
    },
    {
      name: 'Hooks',
      icon: <HookIcon />,
      uri: '/',
      id: '#Hooks',
      childrens: hooks
    }
  ]
  const headerOptions = {
    logo: <Typography variant='caption' />,
    drawerButton: true,
    // logoutText: 'patata',
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
  const footerOptions = {
    appFooterList: [
      {
        title: 'Desarrollo',
        list: [
          {
            title: 'Vicerrectorado de Gestiones gestionadoras(Gestión)',
            onClick: () => null
          },
          {
            title: 'Vicerrectorado de Servicios informáticos(Desarrollo)',
            onClick: () => null
          }
        ]
      },
      {
        title: ' Más applicaciones relacionadas',
        list: [
          {
            title: 'Thesis',
            onClick: () => null
          },
          {
            title: 'Politécnica Virtual',
            onClick: () => null
          },
          {
            title: 'GAUSS',
            onClick: () => null
          }
        ]
      },

      {
        title: 'Ayuda',
        list: [
          {
            title: 'Reporte de incidencias',
            onClick: () => null
          },
          {
            title: 'Documentación',
            onClick: () => null
          }
        ]
      }
    ]
  }

  return (
    <div>
      <AppHeader
        logo={
          pathname !== routes.introduction &&
          pathname !== '/' && <img src={logo} style={{ width: '13em' }} />
        }
        drawerButton={header.simple === undefined || header.simple}
        menu={header && header?.icons ? headerOptions.rightMenu : null}
        extraComponents={
          header && header?.components ? headerOptions.extraComponents : null
        }
        user={
          header && header?.icons
            ? { name: 'Nombre de usuario', surnames: 'Apellidos' }
            : null
        }
      />
      <div className={classes.root}>
        {drawer ? (
          <AppDrawer menu={menuExample} permanent />
        ) : (
          <TemporaryDrawer menu={menu} />
        )}

        <main className={classes.content}>
          <AppContainer>
            <Router />
          </AppContainer>
          <AppFooter
            appFooterColumns={footer.options && footerOptions.appFooterList}
            icons={footer.icons}
          />
        </main>
      </div>
    </div>
  )
}
export default App
