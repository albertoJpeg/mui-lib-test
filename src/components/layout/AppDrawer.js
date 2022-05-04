import React, { useEffect, useState } from 'react'
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CloseIcon from '@material-ui/icons/Close'
import useWindowSize from '../../hooks/useWindowSize'
import useTheme from '@material-ui/core/styles/useTheme'
import IconButton from '@material-ui/core/IconButton'
import ExpandLessOutlinedIcon from '@material-ui/icons/ExpandLessOutlined'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'
import { Link, useLocation } from 'react-router-dom'
import { VerticalItemButton } from '../buttons/VerticalItemButton'
import Divider from '@material-ui/core/Divider'
import clsx from 'clsx'
import MenuIcon from '@material-ui/icons/Menu'
import useLayout from '../../hooks/useLayout'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  drawer: {
    flexShrink: 0,
    backgroundColor: (props) => {
      return props?.colors?.background
        ? `${props.colors.background}!important`
        : `${theme.palette.primary.light}!important`
    }
  },
  drawerMobile: {
    width: (props) => {
      return props?.sizes?.openWidth || 250
    },
    flexShrink: 0,
    backgroundColor: (props) => {
      return props?.colors?.background
        ? `${props.colors.background}!important`
        : `${theme.palette.primary.light}!important`
    }
  },
  drawerOpen: {
    width: (props) => {
      return props?.sizes?.openWidth !== undefined
        ? props?.sizes?.openWidth
        : theme.spacing(33)
    },
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.complex
    })
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.complex
    }),
    overflowX: 'hidden',
    width: (props) => {
      return props?.sizes?.closeWidth !== undefined
        ? props.sizes.closeWidth
        : theme.spacing(9) + 3
    }
  },
  drawerPaper: {
    width: (props) => {
      return props?.sizes?.openWidth !== undefined
        ? props?.sizes?.openWidth
        : theme.spacing(33)
    }
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  icon: {
    fontSize: '24px !important',
    color: (props) => {
      return props?.colors?.text || theme.palette.primary.contrastText
    }
  },
  iconSelected: {
    fontSize: '24px !important',
    color: (props) => {
      return props?.colors?.selectedText || theme.palette.secondary.main
    }
  },
  menuText: {
    color: (props) => {
      return props?.colors?.text || theme.palette.primary.contrastText
    }
  },
  subMenuText: {
    color: (props) => {
      return props?.colors?.text || theme.palette.primary.contrastText
    },
    paddingLeft: theme.spacing(5)
  },
  subMenuTextSelected: {
    color: (props) => {
      return props.colors && props.colors.accent
        ? props.colors.accent
        : theme.palette.common
    },
    paddingLeft: theme.spacing(5)
  },
  menuTextSelected: {
    color: (props) => {
      return props?.colors?.selectedText || theme.palette.secondary.light
    }
  },
  menuItemSelected: {
    backgroundColor: (props) => {
      return props?.colors?.selectedBrackground
        ? `${props.colors.selectedBrackground}!important`
        : `${theme.palette.primary.main}!important`
    }
  },
  paddingListItem: {
    paddingLeft: 24
  },
  closeMenuButton: {
    marginRight: 0,
    marginLeft: 'auto'
  },
  listItem: {
    padding: 0
  },
  ListItemTextSelected: {
    color: (props) => {
      return props?.colors?.selectedText || theme.palette.secondary.main
    }
  },
  ListItemTextNoSelected: {
    color: (props) => {
      return props?.colors?.text || theme.palette.primary.contrastText
    }
  },
  listItemIcon: {
    minWidth: 40
  },
  normalMenuListItemText: {
    fontSize: '1rem',
    textTransform: 'uppercase'
  }
}))

AppDrawer.propTypes = {
  /**
   * {
   *   "value": "Objecto Menu para el menu de usuario",
   *   "default": "[]"
   * }
   */
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.any.isRequired,
      children: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired
        })
      )
    })
  ),
  /**
   * {
   *   "value": "Opción para cambiar el estilo del drawer entre permanente y flotante",
   *   "default": "true"
   * }
   */
  permanent: PropTypes.bool
}

/**
 * AppDrawer provee de un drawer/menu lateral básico. Se puede configurar para tener un menu con máximo un nivle de anidación de 2 elementos.
 * Es necesario utilizar el componente LayoutProvider por encima de este componente para su correcto funcionamiento
 */
export function AppDrawer(props) {
  const classes = useStyles(props)
  const { menu, permanent } = props
  const theme = useTheme()
  const windowSize = useWindowSize()
  const { pathname } = useLocation()
  const normalMenu = []
  const collapseMenu = []
  const [collapseMenus, setCollapseMenus] = useState(getDefaultMenuState())
  const { open, setOpen } = useLayout()

  useEffect(() => {
    setCollapseMenus(getDefaultMenuState())
  }, [pathname, menu])

  function getDefaultMenuState() {
    return menu
      .filter((m) => m.childrens !== undefined)
      .map((e) => ({ id: e.id, open: false }))
  }

  function changeSelectedMenuItem(id, force = false) {
    setCollapseMenus(
      collapseMenus.map((m) => {
        if (m.id === id) {
          return { ...m, open: !force ? !m.open : true }
        } else {
          return { ...m, open: false }
        }
      })
    )
  }

  function resetMenu() {
    setCollapseMenus(getDefaultMenuState())
    if (windowSize.width < theme.breakpoints.values.md || !permanent) {
      setOpen(false)
    }
  }

  function checkMenuNeedsToBeClosed() {
    if (windowSize.width < theme.breakpoints.values.md || !permanent) {
      setOpen(false)
    }
  }

  function openWithSubMenu(name) {
    changeSelectedMenuItem(name, true)
    setOpen(true)
  }

  menu.forEach((e) => {
    const uriSelected = pathname === e.uri
    const isUriPathname = pathname === e.uri

    if (!e.childrens) {
      collapseMenu.push(
        <Link
          to={e.uri}
          style={{ textDecoration: 'none' }}
          key={`${e.id}-desktopCollapseMenu-noChildrens`}
        >
          <ListItem
            button
            selected={uriSelected}
            classes={{
              selected: classes.menuItemSelected,
              root: classes.listItem
            }}
          >
            <VerticalItemButton
              icon={e.icon}
              text={e.name}
              selected={isUriPathname}
              colors={props.colors}
            />
          </ListItem>
        </Link>
      )
      normalMenu.push(
        <Link
          to={e.uri}
          style={{ textDecoration: 'none' }}
          key={`${e.id}-desktopNormalMenu-noChildrens`}
        >
          <ListItem
            button
            selected={uriSelected}
            onClick={resetMenu}
            classes={{
              selected: classes.menuItemSelected,
              root: classes.paddingListItem
            }}
          >
            <ListItemIcon classes={{ root: classes.listItemIcon }}>
              {React.cloneElement(e.icon, {
                className: uriSelected ? classes.iconSelected : classes.icon
              })}
            </ListItemIcon>
            <ListItemText
              classes={{
                root: clsx({
                  [classes.ListItemTextSelected]: uriSelected,
                  [classes.ListItemTextNoSelected]: !uriSelected
                })
              }}
              primary={
                <Typography
                  className={classes.normalMenuListItemText}
                  variant='button'
                >
                  {e.name}
                </Typography>
              }
            />
          </ListItem>
        </Link>
      )
    } else {
      const isSubmenuUri = !!e.childrens.find((m) => m.uri === pathname)
      const itemFound = collapseMenus.find((s) => s.id === e.id)
      const isOpen = itemFound ? itemFound.open : false

      normalMenu.push(
        <div key={`${e.id}-desktopNormalMenu-Childrens`}>
          <ListItem
            button
            selected={isOpen || isSubmenuUri}
            classes={{
              selected: classes.menuItemSelected,
              root: classes.paddingListItem
            }}
            onClick={() => {
              changeSelectedMenuItem(e.id)
            }}
          >
            <ListItemIcon classes={{ root: classes.listItemIcon }}>
              {React.cloneElement(e.icon, {
                className:
                  isOpen || isSubmenuUri ? classes.iconSelected : classes.icon
              })}
            </ListItemIcon>
            <ListItemText
              classes={{
                root: clsx({
                  [classes.ListItemTextSelected]: isOpen || isSubmenuUri,
                  [classes.ListItemTextNoSelected]: !(isOpen || isSubmenuUri)
                })
              }}
              primary={
                <Typography
                  variant='button'
                  className={classes.normalMenuListItemText}
                >
                  {e.name}
                </Typography>
              }
            />
            {isOpen || isSubmenuUri ? (
              <ExpandLessOutlinedIcon
                classes={{ root: classes.menuText }}
                className={clsx({
                  [classes.menuTextSelected]: isOpen || isSubmenuUri
                })}
              />
            ) : (
              <ExpandMoreOutlinedIcon classes={{ root: classes.menuText }} />
            )}
          </ListItem>
          <Collapse in={isOpen || isSubmenuUri} timeout='auto' unmountOnExit>
            <List compone nt='div' disablePadding>
              {e.childrens.map((c) => {
                return (
                  <Link
                    to={c.uri}
                    style={{ textDecoration: 'none' }}
                    key={`${c.name}-subDesktopMenu-Childrens`}
                  >
                    <ListItem
                      button
                      onClick={checkMenuNeedsToBeClosed}
                      selected={isOpen || isSubmenuUri}
                      classes={{
                        selected: classes.menuItemSelected,
                        root:
                          pathname === c.uri
                            ? classes.subMenuTextSelected
                            : classes.subMenuText
                      }}
                    >
                      {c.icon && (
                        <ListItemIcon
                          classes={{
                            root: clsx({
                              [classes.ListItemTextSelected]:
                                pathname === c.uri,
                              [classes.ListItemTextNoSelected]:
                                !pathname === c.uri
                            })
                          }}
                        >
                          {c.icon}
                        </ListItemIcon>
                      )}
                      <ListItemText
                        classes={{
                          root: clsx({
                            [classes.ListItemTextSelected]: pathname === c.uri,
                            [classes.ListItemTextNoSelected]:
                              !pathname === c.uri
                          })
                        }}
                        primary={
                          <Typography variant='body1'>{c.name}</Typography>
                        }
                      />
                    </ListItem>
                  </Link>
                )
              })}
            </List>
          </Collapse>
        </div>
      )

      collapseMenu.push(
        <ListItem
          style={{ padding: 0 }}
          onClick={() => openWithSubMenu(e.id)}
          selected={uriSelected || isSubmenuUri}
          classes={{ selected: classes.menuItemSelected }}
          key={`${e.id}-desktopCollapseMenu-childrens`}
        >
          <VerticalItemButton
            icon={e.icon}
            text={e.name}
            selected={uriSelected || isSubmenuUri}
            colors={props.colors}
          />
        </ListItem>
      )
    }
  })

  const CustomList = () =>
    open ? <List>{normalMenu}</List> : <List>{collapseMenu}</List>

  return (
    <div className={classes.root}>
      {windowSize.width >= theme.breakpoints.values.md && (
        <div>
          {permanent ? (
            <Drawer
              open={open}
              variant='permanent'
              className={clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open
              })}
              classes={{
                paper: clsx(classes.drawer, {
                  [classes.drawerOpen]: open,
                  [classes.drawerClose]: !open,
                  [classes.drawer]: true,
                  [classes.drawerTest]: true
                })
              }}
            >
              <div className={classes.drawerHeader}>
                <ListItem style={{ padding: 0 }}>
                  <IconButton
                    edge='start'
                    className={classes.collapseDrawerButton}
                    color='inherit'
                    aria-label='open drawer'
                    onClick={() => setOpen(!open)}
                  >
                    <MenuIcon />
                  </IconButton>
                </ListItem>
              </div>
              <Divider />
              <CustomList />
            </Drawer>
          ) : (
            <Drawer
              anchor='left'
              open={open}
              onClose={() => setOpen(false)}
              classes={{ paper: clsx(classes.drawerMobile) }}
            >
              <IconButton
                onClick={() => setOpen(!open)}
                className={classes.closeMenuButton}
              >
                <CloseIcon />
              </IconButton>
              <List>{normalMenu}</List>
            </Drawer>
          )}
        </div>
      )}
      {windowSize.width < theme.breakpoints.values.md && (
        <div>
          <Drawer
            anchor='left'
            open={open}
            onClose={() => setOpen(false)}
            classes={{ paper: clsx(classes.drawerMobile) }}
          >
            <IconButton
              onClick={() => setOpen(!open)}
              className={classes.closeMenuButton}
            >
              <CloseIcon />
            </IconButton>
            <List>{normalMenu}</List>
          </Drawer>
        </div>
      )}
    </div>
  )
}
