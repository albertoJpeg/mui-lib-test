import React from 'react'
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  button: {
    minHeight: 56, // setting height/width is optional
    width: 75
  },
  label: {
    // Aligns the content of the button vertically.
    flexDirection: 'column'
  },
  icon: {
    fontSize: '24px !important',
    marginBottom: theme.spacing(1),
    color: (props) => {
      if (props.selected) {
        return props?.colors?.selectedText || theme.palette.secondary.main
      } else {
        return props?.colors?.text || theme.palette.primary.contrastText
      }
    }
  },
  text: {
    fontSize: '8.5px',
    textDecoration: 'none',
    color: (props) => {
      if (props.selected) {
        return props?.colors?.selectedText || theme.palette.secondary.main
      } else {
        return props?.colors?.text || theme.palette.primary.contrastText
      }
    }
  }
}))

export function VerticalItemButton(props) {
  const { icon, text } = props
  const classes = useStyles(props)
  return (
    <Button
      classes={{ root: classes.button, label: classes.label }}
      variant='text'
      color='primary'
      disableRipple
    >
      {React.cloneElement(icon, { className: classes.icon })}
      <Typography classes={{ root: classes.text }}> {text} </Typography>
    </Button>
  )
}
