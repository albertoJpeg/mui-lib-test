import React from 'react'
import { App } from './App'
import { LayoutProvider } from '../../dist/vite-upm-react-ui.es'

export const Providers = () => {
  return (
    <React.Fragment>
      <LayoutProvider>
        <App />
      </LayoutProvider>
    </React.Fragment>
  )
}
