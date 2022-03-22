import React, { useRef, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, CircularProgress } from '@material-ui/core'
import PropTypes from 'prop-types'

const useStyles = makeStyles(() => ({
  minDimensions: {
    minWidth: (props) => props.width,
    minHeight: (props) => props.height
  }
}))

LoadingButton.propTypes = {
  /**
   * {
   *   "value": "Estado loading",
   *   "default": "false"
   * }
   */
  loading: PropTypes.bool,
  /**
   * {
   *   "value": "Contenido del botón",
   *   "default": "''"
   * }
   */
  children: PropTypes.any,
  /**
   * {
   *   "value": "Color del spinner",
   *   "default": "inherit"
   * }
   */
  color: PropTypes.oneOf(['inherit', 'primary', 'secondary']),
  /**
   * {
   *   "value": "Propiedades nativas del componente de material",
   *   "default": "''"
   * }
   */
  materialProps: PropTypes.any
}
LoadingButton.defaultProps = {
  color: 'inherit',
  loading: false
}

/**
 * LoadingButton, botón de material-ui al que se añade la funcionalidad de cargargando respetando el tamaño del botón al poner el spinner y desabilitando el botón cuando está en este estado.
 */
export function LoadingButton(props) {
  const ref = useRef()
  const { loading, children, ...materialProps } = props
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const classes = useStyles({ width: width, height: height })

  React.useEffect(
    () => {
      if (ref.current && ref.current.getBoundingClientRect().width) {
        setWidth(ref.current.getBoundingClientRect().width)
      }
      if (ref.current && ref.current.getBoundingClientRect().height) {
        setHeight(ref.current.getBoundingClientRect().height)
      }
    },
    // children are a dep so dimensions are updated if initial contents change
    [children]
  )

  return (
    <Button
      ref={ref}
      disabled={loading}
      className={`${width && height ? classes.minDimensions : {}}`}
      {...materialProps}
    >
      {loading ? (
        <CircularProgress size='1.535rem' color={props.color || 'primary'} />
      ) : (
        children
      )}
    </Button>
  )
}
