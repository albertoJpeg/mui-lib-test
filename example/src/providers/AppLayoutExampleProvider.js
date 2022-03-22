import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { AppLayoutExampleContext } from '../contexts/AppLayoutExampleContext'

AppLayoutExampleProvider.propTypes = {
  children: PropTypes.any
}

export function AppLayoutExampleProvider(props) {
  const [header, setHeader] = useState({
    header: {
      simple: true,
      icons: false,
      components: false
    }
  })
  const [footer, setFooter] = useState({
    options: false,
    icons: false
  })
  const [drawer, setDrawer] = useState(false)

  const { children } = props
  return (
    <AppLayoutExampleContext.Provider
      value={{
        header: header,
        setHeader: setHeader,
        footer: footer,
        setFooter: setFooter,
        drawer: drawer,
        setDrawer: setDrawer
      }}
    >
      {children}
    </AppLayoutExampleContext.Provider>
  )
}
