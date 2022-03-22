import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuItem from '@material-ui/core/MenuItem'
import MenuIcon from '@material-ui/icons/Menu'
import MoreIcon from '@material-ui/icons/MoreVert'
import ListItemText from '@material-ui/core/ListItemText'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'
import ListItemIcon from '@material-ui/core/ListItemIcon'

import MenuButton from '../buttons/MenuButton'
import { Avatar } from '@material-ui/core'
import Tooltip from '@material-ui/core/Tooltip'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import ListItem from '@material-ui/core/ListItem'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import Collapse from '@material-ui/core/Collapse'
import List from '@material-ui/core/List'
import useLayout from '../../hooks/useLayout'
import { capitalize } from '../../helpers/string'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
    // backgroundColor: theme.palette.primary.dark
  },
  grow: {
    flexGrow: 1
  },
  collapseDrawerButton: {
    marginRight: theme.spacing(2)
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  menuIcon: {
    fontSize: '24'
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3)
  },
  nestedCollapse: {
    paddingLeft: theme.spacing(6)
  },
  iconButton: {
    color: theme.palette.primary.contrastText
  },
  listItemIcon: {
    minWidth: 40
  }
}))

AppHeader.propTypes = {
  /**
   * {
   *   "value": "Logo de la aplicación en la parte izquierda de la barra",
   *   "default": "null"
   * }
   */
  logo: PropTypes.any,
  /**
   * {
   *   "value": "Objecto usuario para el menu de usuario",
   *   "default": "null"
   * }
   */
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surnames: PropTypes.string.isRequired,
    email: PropTypes.string
  }),
  /**
   * {
   *   "value": "String para el tooltip del icono de cuenta de usuario",
   *   "default": "null"
   * }
   */
  tooltipProfile: PropTypes.string,
  /**
   * {
   *   "value": "Función de para cerrar sesión",
   *   "default": "() => window.location.replace('/logout')"
   * }
   */
  onLogout: PropTypes.func,
  /**
   * {
   *   "value": "Texto de logout",
   *   "default": "Cerrar Sesión"
   * }
   */
  logoutText: PropTypes.string,
  /**
   * {
   *   "value": "Icono para desplegar menu lateral",
   *   "default": "false"
   * }
   */
  drawerButton: PropTypes.bool,
  /**
   * {
   *   "value": "Menu de iconos de la parte derecha",
   *   "default": "[]"
   * }
   */
  menu: PropTypes.array,
  /**
   * {
   *   "value": "Espacio reservado a componentes personalizables en la parte derecha",
   *   "default": "<></>"
   * }
   */
  extraComponents: PropTypes.any
}
/**
 * AppHeader provee de un esqueleto básico para la barra de la aplicación. Se puede configurar para albergar los siguientes elementos
 * ( Logo de aplicación, icono para desplegar menu lateral, iconos en la parte derecha, menu de cuenta de usuario y espacio para inyectar componentes personalizados).
 * Es necesario utilizar el componente LayoutProvider por encima de este componente para su correcto funcionamiento.
 */
export function AppHeader(props) {
  const classes = useStyles()
  const { open, setOpen } = useLayout()
  const {
    logo,
    user,
    tooltipProfile,
    onLogout,
    logoutText,
    drawerButton,
    menu,
    extraComponents
  } = props

  return (
    <div>
      <AppBar position='fixed' className={classes.appBar} id='appbar-fixed-top'>
        <Toolbar>
          {drawerButton && (
            <IconButton
              edge='start'
              className={classes.collapseDrawerButton}
              color='inherit'
              aria-label='open drawer'
              key='menu-button-drawer'
              onClick={() => setOpen(!open)}
            >
              <MenuIcon />
            </IconButton>
          )}

          {logo}
          <div className={classes.grow} />
          <div>
            {extraComponents && extraComponents.map((component) => component)}
            {menu &&
              menu.map((element) => {
                if (!element.submenu) {
                  return (
                    <Tooltip
                      title={element.tooltip}
                      key={`${element.tooltip}-iconButton`}
                    >
                      <IconButton
                        aria-label={element.ariaLabel || ''}
                        onClick={element.handleClick}
                        classes={{ root: classes.iconButton }}
                      >
                        {element.icon}
                      </IconButton>
                    </Tooltip>
                  )
                } else {
                  return (
                    <MenuButton
                      tooltip={element.tooltip}
                      iconButton
                      color='inherit'
                      icon={<HelpOutlineIcon />}
                      key={`${element.tooltip}-menu`}
                    >
                      {element.submenu.map((subElement, index) => (
                        <MenuItem
                          key={`${subElement.name}-${index}-menuItem`}
                          onClick={subElement.handleClick}
                        >
                          {subElement.name}
                        </MenuItem>
                      ))}
                    </MenuButton>
                  )
                }
              })}
          </div>
          <div className={classes.sectionDesktop}>
            {user && user.name && user.surnames && (
              <MenuButton
                edge='end'
                tooltip={tooltipProfile || 'Perfil'}
                iconButton
                color='inherit'
                icon={
                  <Avatar className={classes.small}>{user?.name[0]}</Avatar>
                }
                key='account-MenuButton'
              >
                <MenuItem key='user-menu'>
                  <ListItemIcon className={classes.listItemIcon}>
                    <AccountCircleIcon fontSize='default' />
                  </ListItemIcon>
                  <ListItemText
                    primary={capitalize(`${user?.name} ${user?.surnames}`)}
                  />
                </MenuItem>
                <MenuItem key='user-logout'>
                  <ListItemIcon className={classes.listItemIcon}>
                    <PowerSettingsNewIcon fontSize='default' />
                  </ListItemIcon>
                  <ListItemText
                    primary={logoutText || 'Cerrar Sesión'}
                    onClick={
                      onLogout || (() => window.location.replace('/logout'))
                    }
                  />
                </MenuItem>
              </MenuButton>
            )}
          </div>
          <div className={classes.sectionMobile}>
            {extraComponents && extraComponents.map((component) => component)}
            <MenuButton
              edge='end'
              iconButton
              color='inherit'
              icon={<MoreIcon />}
              key='more-mobile-MenuButton'
            >
              <MenuItem>
                <ListItemIcon className={classes.listItemIcon}>
                  <AccountCircleIcon fontSize='default' />
                </ListItemIcon>
                <ListItemText
                  primary={
                    user
                      ? capitalize(
                          `${user?.name} ${user?.surname1} ${user?.surname2}`
                        )
                      : 'Anónimo'
                  }
                />
              </MenuItem>
              {menu &&
                menu.map((element) => {
                  if (!element.submenu) {
                    return (
                      <MenuItem key={`${element.tooltip}-menu-mobile`}>
                        <ListItemIcon className={classes.listItemIcon}>
                          {element.icon}
                        </ListItemIcon>
                        <ListItemText primary={element.tooltip} />
                      </MenuItem>
                    )
                  } else {
                    return (
                      <div key={`${element.tooltip}-menu-with-submenu-mobile`}>
                        <ListItem
                          button
                          onClick={() =>
                            element.handleState(!element.isCollapseOpen)
                          }
                        >
                          <ListItemIcon className={classes.listItemIcon}>
                            {element.icon}
                          </ListItemIcon>
                          <ListItemText primary={element.tooltip} />
                          {element.isCollapseOpen ? (
                            <ExpandLess />
                          ) : (
                            <ExpandMore />
                          )}
                        </ListItem>
                        <Collapse
                          in={element.isCollapseOpen}
                          timeout='auto'
                          unmountOnExit
                        >
                          <List component='div' disablePadding>
                            {element.submenu.map((element, index) => (
                              <MenuItem
                                key={`${element.name}-${index}-submenuItem-mobile`}
                                className={classes.nestedCollapse}
                                onClick={element.handleClick}
                              >
                                {element.name}
                              </MenuItem>
                            ))}
                          </List>
                        </Collapse>
                      </div>
                    )
                  }
                })}
              <MenuItem key='user-logout-mobile'>
                <ListItemIcon className={classes.listItemIcon}>
                  <PowerSettingsNewIcon fontSize='default' />
                </ListItemIcon>
                <ListItemText
                  primary={logoutText || 'Cerrar Sesión'}
                  onClick={
                    onLogout || (() => window.location.replace('/logout'))
                  }
                />
              </MenuItem>
            </MenuButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}
