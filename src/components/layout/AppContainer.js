import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import useLayout from '../../hooks/useLayout'
import ScrollTop from './ScrollTop'
import { Fab } from '@material-ui/core'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    paddingTop: 64,
    backgroundColor: theme.palette.background.default,
    minWidth: 0, // So the Typography noWrap works
    minHeight: (props) => `calc(100vh - (${props.footer}px + 64px))`
  }
}))

AppContainer.propTypes = {
  /**
   * {
   *   "value": "Cualquier componente React (contenido de la página)",
   *   "default": "<></>"
   * }
   */
  children: PropTypes.any
}

/**
 * AppContainer es un componente contenedor para las páginas de la aplicación. Calcula automáticamente la altura minima del contenedor para
 * que el footer siempre se coloque en la parte inferior de la pantalla. Configura un botón flotante cuando se hace scroll en la página para volver arriba.
 * Es necesario utilizar el componente LayoutProvider por encima de este componente para su correcto funcionamiento.
 */
export function AppContainer(props) {
  const { children } = props
  const { dimensions } = useLayout()
  const classes = useStyles(dimensions)
  return (
    <div className={classes.content}>
      {children}
      <ScrollTop>
        <Fab
          color='primary'
          size='small'
          aria-label='Scroll hacia arriba'
          style={{ pointerEvents: 'all' }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  )
}
