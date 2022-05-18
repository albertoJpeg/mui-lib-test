import React from 'react'
import { Grid, Typography, Link } from '@mui/material'

export default function FooterLinks({ legalNoticeUri }) {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        item
        xs="auto"
        key="footer-link-aviso"
      >
        <Link href={legalNoticeUri} underline="hover" variant="caption" color="textSecondary">
          Aviso legal
        </Link>
      </Grid>
      <Grid
        item
        key="footer-link-copy"
        xs="auto"
      >
        <Typography variant="caption" color="textSecondary" sx={{ px: 1 }}>
          {' | '}
        </Typography>
        <Typography variant="caption" color="textSecondary">
          {`Copyright © ${new Date().getFullYear()} `}
        </Typography>
        <Typography variant="caption" color="textSecondary" sx={{ px: 1 }}>
          {' | '}
        </Typography>
      </Grid>
      <Grid item key="footer-link-upm" xs="auto">
        <Link
          href="https://www.upm.es/contacto/directorio?centro=90&organo=8295"
          underline="hover"
          variant="caption"
          color="textSecondary"
        >
          Vicerrectorado de Estrategia y Transformación Digital - UPM
        </Link>
      </Grid>
    </Grid>
  )
}
