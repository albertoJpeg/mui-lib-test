import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import { useLayout } from 'upm-react-ui'
import '../src/css/app.css'
import { ItemList } from './components/ItemList'

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

export default function TemporaryDrawer(props) {
  const classes = useStyles()
  const { menu } = props
  const { open, setOpen } = useLayout()

  return (
    <Drawer
      open={open}
      onClose={() => setOpen(false)}
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
      <div className={clsx(classes.list)} role='presentation'>
        <List>
          {menu.map((m, i) => (
            <ItemList
              key={`${m.name}-${i}`}
              uri={m.uri}
              text={m.name}
              index={i}
              icon={m.icon}
              children={m.children}
              grouped={m.grouped}
            />
          ))}
        </List>
      </div>
    </Drawer>
  )
}
