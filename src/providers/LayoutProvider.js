import React, { useState } from 'react'
import { LayoutContext } from '../contexts/LayoutContext'
import PropTypes from 'prop-types'

LayoutProvider.propTypes = {
  children: PropTypes.any
}

export function LayoutProvider(props) {
  const { defaultOpen } = props
  const [open, setOpen] = useState(defaultOpen)
  const [dimensions, setDimensions] = useState({ footer: 0, content: 0 })
  const { children } = props
  return (
    <LayoutContext.Provider
      value={{
        dimensions: dimensions,
        setDimensions: setDimensions,
        open: open,
        setOpen: setOpen
      }}
    >
      {children}
    </LayoutContext.Provider>
  )
}
