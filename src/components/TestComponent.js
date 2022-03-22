import React from 'react'
import { Button } from '@material-ui/core'

export const TestComponent = ({ children }) => {
  return <Button variant='contained'>TEXTY:{children}</Button>
}
