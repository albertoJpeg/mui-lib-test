import React, { useEffect, useState } from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import { Collapse, ListSubheader, Typography } from '@material-ui/core'
import List from '@material-ui/core/List'
import { Link, useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  ulZeroPadding: {
    paddingLeft: 0
  },
  listSection: {
    paddingLeft: theme.spacing(7)
  },
  list: {
    width: '100%',
    marginTop: 64
  },
  itemList: {
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(3) - 1
  },
  listItemIcon: {
    minWidth: 0
  },
  listItemText: {
    paddingLeft: theme.spacing(2),
    color: theme.palette.grey['900']
  },
  listItemTextNested: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingLeft: theme.spacing(8),
    fontSize: '0.9rem'
  },
  listItemNestedTypography: {
    fontWeight: 399
  },
  listItemSectionNested: {
    fontSize: '0.9rem',
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5)
  },
  fullList: {
    width: 'auto'
  },
  drawer: {
    flexShrink: 0
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
        : theme.spacing(0)
    }
  }
}))

export function ItemList(props) {
  const [collapse, setCollapse] = useState(false)
  const { text, icon, children, grouped, uri } = props
  const { pathname } = useLocation()
  const classes = useStyles()

  useEffect(
    () => children && isPathnameChildrenItemList(children) && setCollapse(true),
    []
  )

  const isPathnameChildrenItemList = (children) => {
    return (
      children.find((c) => {
        if (c.children) {
          return c.children.find((sc) => sc.uri === pathname) !== undefined
        } else {
          return c.uri === pathname
        }
      }) !== undefined
    )
  }

  const Item = () => {
    const isPathnameSelected = children && isPathnameChildrenItemList(children)
    return (
      <div key={`${text}-${uri}`}>
        <ListItem
          button
          key={`${text}-${uri}-listItem`}
          classes={{ root: classes.itemList }}
          onClick={() => {
            !isPathnameSelected && setCollapse(!collapse)
          }}
          selected={pathname === uri}
        >
          <ListItemIcon classes={{ root: classes.listItemIcon }}>
            {icon}
          </ListItemIcon>
          <ListItemText
            classes={{ root: classes.listItemText }}
            primary={text}
          />
          {children && (collapse ? <ExpandLess /> : <ExpandMore />)}
        </ListItem>
        {children && (
          <Collapse
            in={collapse || isPathnameSelected}
            timeout='auto'
            unmountOnExit
          >
            <List component='div' disablePadding>
              {grouped
                ? children.map((c) => (
                    <li key={`section-${c.name}`}>
                      <ul className={classes.ulZeroPadding}>
                        <ListSubheader
                          color='primary'
                          className={`${classes.listSection} ${classes.listItemSectionNested}`}
                        >
                          {c.name}
                        </ListSubheader>
                        {c?.children?.map((sc) => (
                          <Link
                            to={sc.uri}
                            className={'no-decoration-link'}
                            key={`${sc.name}-${c.uri}`}
                          >
                            <ListItem
                              key={`item-${c.name}-${sc.name}`}
                              className={`${classes.listSection} ${classes.listItemSectionNested}`}
                              button
                              selected={sc.uri === pathname}
                            >
                              <ListItemText
                                primary={
                                  <Typography
                                    variant='body2'
                                    className={classes.listItemNestedTypography}
                                  >
                                    {sc.name}
                                  </Typography>
                                }
                              />
                            </ListItem>
                          </Link>
                        ))}
                      </ul>
                    </li>
                  ))
                : children.map((c) => (
                    <Link
                      to={c.uri}
                      className={'no-decoration-link'}
                      key={`${c.name}-${c.uri}`}
                    >
                      <ListItem
                        key={`item-${c.name}-${c.name}`}
                        className={classes.listItemTextNested}
                        button
                        selected={c.uri === pathname}
                      >
                        <ListItemText
                          primary={
                            <Typography
                              variant='body2'
                              className={classes.listItemNestedTypography}
                            >
                              {c.name}
                            </Typography>
                          }
                        />
                      </ListItem>
                    </Link>
                  ))}
            </List>
          </Collapse>
        )}
      </div>
    )
  }

  if (children) {
    return <Item />
  }
  return (
    <Link to={uri} className={'no-decoration-link'}>
      <Item />
    </Link>
  )
}
