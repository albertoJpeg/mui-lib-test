import React from 'react'

export const AppLayoutExampleContext = React.createContext({
  header: {
    simple: true,
    icons: false,
    components: false
  },
  footer: false
})
