import React from 'react'
import { Avatar, Grid, Typography, useTheme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import useLayout from '../../hooks/useLayout'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12)
  },
  card: {
    height: '100%',
    minWidth: '100%'
  }
}))

WelcomeAvatar.prototype = {
  text: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  message: PropTypes.string
}

export function WelcomeAvatar(props) {
  const { dimensions } = useLayout()
  const { text, name, image, message } = props
  const classes = useStyles(dimensions)
  const theme = useTheme()
  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      style={{ paddingTop: theme.spacing(10) }}
    >
      <Avatar
        alt='user image'
        src={`data:image/png;base64, ${image}`}
        className={classes.large}
      >
        <Typography variant='h3'>{name[0]}</Typography>
      </Avatar>
      <Typography
        variant='h4'
        gutterBottom
        style={{ margin: '0.67em', textAlign: 'center' }}
      >
        {text}
      </Typography>

      <Typography
        variant='button'
        display='block'
        gutterBottom
        style={{ textAlign: 'justify', paddingBottom: '1em' }}
      >
        {message}
      </Typography>
    </Grid>
  )
}
