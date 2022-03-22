import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'
import useLayout from '../../hooks/useLayout'
import PropTypes from 'prop-types'

const useStyles = makeStyles(() => ({
  root: {
    minHeight: (props) => `calc(100vh - (${props.footer}px + 64px))`
  },
  linearContent: {
    width: '100%'
  }
}))

LoaderPage.prototype = {
  linear: PropTypes.bool,
  color: PropTypes.string
}

export function LoaderPage(props) {
  const { linear, color } = props
  const { dimensions } = useLayout()
  const classes = useStyles(dimensions)

  return (
    <Grid
      container
      justify='center'
      alignItems='center'
      className={classes.root}
    >
      {linear ? (
        <Grid xs={7} item>
          <LinearProgress color={color || 'primary'} />
        </Grid>
      ) : (
        <Grid xs='auto' item>
          <CircularProgress color={color || 'primary'} />
        </Grid>
      )}
      <Grid xs='auto' item />
    </Grid>
  )
}
