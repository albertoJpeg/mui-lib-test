import React, { useRef } from 'react'
import { useLayout } from '../../hooks/useLayout'
import { Box, Chip, Grid, IconButton, Link, ListItem, List, Toolbar, Tooltip, Typography } from '@mui/material'
import { YouTube, LinkedIn, Instagram, Twitter, Facebook, LocationOn } from '@mui/icons-material'
import whiteLogo from '../../images/escudo_blanco.png'

const AppFooterColumn = props => {
  const { items, title } = props

  return (
    <Grid item xs={2}>
      <List>
        <ListItem>
          <Typography
            variant='body1'
            sx={{
              color: theme => theme.palette.primary.contrastText
            }}
          >
            {title}
          </Typography>
        </ListItem>
        {items.map((children, index) => {
          return (
            <ListItem key={`app-footer-element-${index}`}>
              <Link
                href="#"
                underline='hover'
                sx={{
                  color: theme => theme.palette.primary.contrastText
                }}
              >
                <Typography
                  variant='caption'
                  sx={{
                    color: theme => theme.palette.primary.contrastText
                  }}
                >
                  {children}
                </Typography>
              </Link>
            </ListItem>
          )
        })}
      </List>
    </Grid>
  )
}

export const CustomAppFooter = props => {
  const ref = useRef()
  const { columns = [null, null, null], contact } = props

  const getColumns = columns => {
    const numberOfColumns = columns.length
    let ret = [...columns]
    if (columns.every(c => c !== null)) {
      if (numberOfColumns < 3) {
        const fillNulls = Array(3 - numberOfColumns).fill(null)
        ret = [...ret, ...fillNulls]
      } else if (numberOfColumns > 4) {
        ret = ret.slice(0, 3)
      }
    }

    return ret
  }
  console.log('getColumns(columns)', getColumns(columns))

  return (
    <React.Fragment
      ref={ref}
      style={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <footer>
        <Grid
          container
          direction='row'
          justifyContent='center'
          sx={{
            minHeight: 150,
            bgcolor: theme => theme.palette.primary.main
          }}
        >
          {
            getColumns(columns).map(c => {
              return c === null
                ? <Grid item xs={2} />
                : (
                  <Grid item xs={2}>
                    <List>
                      <ListItem>
                        <Typography
                          variant='body1'
                          sx={{
                            color: theme => theme.palette.primary.contrastText
                          }}
                        >
                          {c.title}
                        </Typography>
                      </ListItem>
                      {c.items.map((children, index) => {
                        return (
                          <ListItem key={`app-footer-element-${index}`}>
                            <Link
                              href="#"
                              underline='hover'
                              sx={{
                                color: theme => theme.palette.primary.contrastText
                              }}
                            >
                              <Typography
                                variant='caption'
                                color='textSecondary'
                                sx={{
                                  color: theme => theme.palette.primary.contrastText
                                }}
                              >
                                {children}
                              </Typography>
                            </Link>
                          </ListItem>
                        )
                      })}
                    </List>
                  </Grid>
                  )
            })
          }
          <Grid item xs={2} />
          {
            contact
              ? <AppFooterColumn title='Concacto' items={contact}/>
              : <Grid item xs={2} />
          }
          <Grid
            item
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <img
              src={whiteLogo}
              alt='app_footer_logo'
              style={{ height: 100 }}
            />
          </Grid>
        </Grid>
      </footer>
      <footer>
        <Box>
          <Toolbar
            disableGutters
            sx={{
              minHeight: { md: 60 },
              p: theme => theme.spacing(0, 6)
            }}
          >
            <Grid
              container
              direction='row'
              alignItems="center"
              justifyContent='center'
            >
              <Grid
                item
                xs={3}
                justifyContent='flex-start'
                container
                key='footer-chip'
              >
                <Grid
                  item
                  key='footer-chip-item'
                >
                  <Chip
                    component='a'
                    sx={{
                      border: 0
                    }}
                    clickable
                    icon={<LocationOn key='chip-icon' />}
                    label="Madrid, España"
                    key='chip-location'
                    variant='outlined'
                  />
                </Grid>
              </Grid>
              <Grid
                container
                item
                justifyContent='center'
                xs={6}
                direction='row'
                spacing={2}
                key='footer-links'
              >
                <Grid
                  item
                  key='footer-link-aviso'
                >
                  <Link href="#" underline='hover' variant='caption' color='textSecondary'>
                    Aviso legal{' '}
                  </Link>
                </Grid>
                <Grid item key='footer-link-copy'>
                  <Link href="#" underline='hover' variant='caption' color='textSecondary'>
                    {`Copyright © ${new Date().getFullYear()} `}
                  </Link>
                </Grid>
                <Grid item key='footer-link-upm'>
                  <Link href="#" underline='hover' variant='caption' color='textSecondary'>
                    Vicerrectorado de Estrategia y Transformación Digital - UPM
                  </Link>
                </Grid>
              </Grid>
              <Grid
                container
                item
                xs={3}
                justifyContent='flex-end'
              >
                <Grid item>
                  <Tooltip title={'LinkedIn'} key='LinkedInTooltip'>
                    <IconButton size="large" key='LinkedIn' aria-label="LinkedIn">
                      <LinkedIn />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title={'Instagram'} key='InstagramTooltip'>
                    <IconButton size="large" key='Instagram' aria-label="Instagram">
                      <Instagram />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title={'Twitter'} key='TwitterTooltip'>
                    <IconButton size="large" key='Twitter' aria-label="Twitter">
                      <Twitter />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title={'Youtube'} key='YoutubeTooltip'>
                    <IconButton size="large" key='Youtube' aria-label="Youtube">
                      <YouTube />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title={'Facebook'} key='FacebookTooltip'>
                    <IconButton size="large" aria-label="Facebook" key="Facebook" edge='end'>
                      <Facebook />
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </Box>
      </footer>
    </React.Fragment>
  )
}
