import React, { useState } from 'react'

export const LayoutContext = React.createContext({})

export const LayoutProvider = props => {
  const { defaultOpen, children } = props
  const [open, setOpen] = useState(defaultOpen)
  const [dimensions, setDimensions] = useState({ footer: 0, content: 0 })

  return (
    <LayoutContext.Provider
      value={{
        open,
        setOpen,
        dimensions,
        setDimensions
      }}
    >
      {children}
    </LayoutContext.Provider>
  )
}
