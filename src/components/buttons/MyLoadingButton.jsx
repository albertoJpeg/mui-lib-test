import React from 'react'
import LoadingButton from '@mui/lab/LoadingButton'

export const MyLoadingButton = props => {
  const { value, children, ...rest } = props

  return (
    <LoadingButton {...rest}>
      {children}
      {' '}
      {value}
    </LoadingButton>
  )
}
