import React from 'react'
import Container from '@material-ui/core/Container'
import { Grid } from '@material-ui/core'
import { sizes } from '../config/const'
import logo from '../images/Logo.png'

export default function Introduction() {
  return (
    <Container maxWidth='md' style={{ paddingTop: sizes.paddingTopContainer }}>
      <Grid container justify='center'>
        <img src={logo} style={{ width: '60%' }} />
      </Grid>
    </Container>
  )
}
