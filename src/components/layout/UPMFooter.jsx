import { Box, Grid, Toolbar } from '@mui/material'
import React from 'react'
import Location from '../ui/Location'
import FooterLinks from '../ui/FooterLinks'
import SocialMediaButtons from '../buttons/SocialMediaButtons'

export function UPMFooter(props) {
  const { legalNoticeUri } = props

  return (
    <footer>
      <Box>
        <Toolbar
          disableGutters
          sx={{
            minHeight: { md: 60 },
          }}
        >
          <Grid
            container
            columns={24}
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={{
              sm: 1,
              xs: 1,
            }}
            sx={{
              px: {
                xs: 2,
                lg: 6,
                xl: 6,
              },
            }}
          >
            <Grid
              item
              sm="auto"
              md={7}
              lg={6}
              xl={6}
              key="footer-chip"
            >
              <Location />
            </Grid>
            <Grid
              item
              sm="auto"
              md={10}
              lg={12}
              xl={12}
            >
              <FooterLinks legalNoticeUri={legalNoticeUri} />
            </Grid>
            <Grid
              item
              sm="auto"
              md={7}
              lg={6}
              xl={6}
            >
              <SocialMediaButtons />
            </Grid>
          </Grid>
        </Toolbar>
      </Box>
    </footer>
  )
}
