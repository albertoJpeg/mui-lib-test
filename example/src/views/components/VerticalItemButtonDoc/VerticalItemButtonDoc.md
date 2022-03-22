import React from 'react'
import { VerticalItemButton } from 'upm-react-ui'
import { makeStyles } from '@material-ui/core/styles'
import ReactIcon from '../../../images/icons/ReactIcon'
import { useTheme } from '@material-ui/core'
import HookIcon from '../../../images/icons/HookIcon'
import HomeIcon from '@material-ui/icons/Home'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  backgroundColor: {
    backgroundColor: theme.palette.primary.main
  }
}))

export default function (props) {
  const classes = useStyles()
  const theme = useTheme()
  
  return (
    <>
      <div className={`${classes.backgroundColor} ${classes.root}`}>
        <VerticalItemButton icon={<ReactIcon />} text='Componentes React' />
        <VerticalItemButton
          icon={<ReactIcon />}
          text='Componentes React'
          selected
        />
        <VerticalItemButton icon={<HomeIcon />} text='Inicio' selected />

        <VerticalItemButton
          icon={<HookIcon />}
          text='Ejemplos Hooks'
          colors={{
            text: theme.palette.error.main
          }}
        />
      </div>
      <div className={classes.root}>
        <VerticalItemButton
          icon={<ReactIcon />}
          text='Componentes React'
          colors={{
            text: theme.palette.primary.main
          }}
        />
        <VerticalItemButton
          icon={<ReactIcon />}
          text='Componentes React'
          selected
          colors={{
            text: theme.palette.primary.main,
            selectedText: theme.palette.success.main
          }}
        />
        <VerticalItemButton icon={<HomeIcon />} text='Inicio' selected />
        <VerticalItemButton
          icon={<HookIcon />}
          text='Ejemplos Hooks'
          colors={{
            text: theme.palette.error.main
          }}
        />
      </div>
    </>
  )
}
