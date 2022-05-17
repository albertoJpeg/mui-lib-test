import React from 'react'
import {
  Box, Chip, Grid, IconButton, Link, ListItem, List, Toolbar, Tooltip, Typography
} from '@mui/material'
import {
  YouTube, LinkedIn, Instagram, Twitter, Facebook, LocationOn
} from '@mui/icons-material'
import whiteLogo from '../../images/escudo_blanco.png'

function AppFooterColumn (props) {
  const { items, title, uri } = props

  return (
    <Grid
      item
      sm={12} md={12} lg={12} xs={24}
    >
      <List disableGutters disablePadding>
        <ListItem
          sx={{
            p: theme => theme.spacing(0, 2, 0, 2)
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: (theme) => theme.palette.primary.contrastText
            }}
          >
            {title}
          </Typography>
        </ListItem>
        {items.map((children) => (
          <ListItem
            key={`app-footer-element-${children}`}
          >
            <Link
              href={uri}
              underline="hover"
              sx={{
                color: (theme) => theme.palette.primary.contrastText
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: (theme) => theme.palette.primary.contrastText
                }}
              >
                {children}
              </Typography>
            </Link>
          </ListItem>
        ))}
      </List>
    </Grid>
  )
}

const getColumns = (columns) => {
  const numberOfColumns = columns.length
  let ret = [...columns]
  if (columns.every((c) => c !== null)) {
    if (numberOfColumns < 3) {
      const fillNulls = Array(3 - numberOfColumns).fill(null)
      ret = [...ret, ...fillNulls]
    } else if (numberOfColumns > 4) {
      ret = ret.slice(0, 3)
    }
  }

  return ret
}

export const CustomAppFooter = (props) => {
  const { columns = [null, null, null], contact, legalNoticeUri = '#' } = props

  return (
    <React.Fragment>
      <footer>
        <Grid
          container
          columns={24}
          rowSpacing={3}
          justifyContent={{
            sm: 'space-evenly'
          }}
          sx={{
            mt: 0,
            pb: 3,
            px: {
              xs: 3,
              lg: 8
            },
            minHeight: 150,
            backgroundColor: (theme) => theme.palette.primary.main
          }}
        >
          {
            getColumns(columns).map((c) => (c === null
              ? <Grid item lg={4} md={4} sm={8} xs={24} />
              : (
                <Grid item lg={4} md={4} sm={8} xs={24}>
                  <List disablePadding>
                    <ListItem
                      sx={{
                        p: theme => theme.spacing(0, 2, 0, 2)
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          color: (theme) => theme.palette.primary.contrastText
                        }}
                      >
                        {c.title}
                      </Typography>
                    </ListItem>
                    {c.items.map((children) => (
                      <ListItem
                        key={`app-footer-element-${children}`}
                      >
                        <Link
                          href={c.uri}
                          underline="hover"
                          sx={{
                            color: (theme) => theme.palette.primary.contrastText
                          }}
                        >
                          <Typography
                            variant="caption"
                            color="textSecondary"
                            sx={{
                              color: (theme) => theme.palette.primary.contrastText
                            }}
                          >
                            {children}
                          </Typography>
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                </Grid>
                )))
          }
          <Grid item lg={4} xs={0}/>

          <Grid item lg={8} md={12} xs={24} >
            <Grid
              container
              columns={24}
            >
              {
                contact
                  ? <AppFooterColumn title="Contacto" items={contact} uri={contact} />
                  : <Grid item sm={12} md={12} lg={12} xs={24} />
              }
              <Grid
                item
                sm={12} md={12} lg={12} xs={24}
                sx={{
                  display: 'flex',
                  justifyContent: {
                    md: 'flex-end',
                    xl: 'flex-end',
                    lg: 'flex-end',
                    sm: 'flex-end',
                    xs: 'flex-start'
                  },
                  alignItems: 'center'
                }}
              >
                <img
                  src={whiteLogo}
                  alt="app_footer_logo"
                  style={{ height: 100 }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </footer>
      <footer>
        <Box>
          <Toolbar
            disableGutters
            sx={{
              minHeight: { md: 60 },
              p: (theme) => theme.spacing(0, 6)
            }}
          >
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <Grid
                item
                xs={3}
                justifyContent="flex-start"
                container
                key="footer-chip"
              >
                <Grid
                  item
                  key="footer-chip-item"
                >
                  <Chip
                    component="a"
                    sx={{
                      border: 0
                    }}
                    clickable
                    icon={<LocationOn key="chip-icon" />}
                    label="Madrid, España"
                    key="chip-location"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Grid
                container
                item
                justifyContent="center"
                xs='auto'
                md={6}
                direction="row"
                spacing={2}
                key="footer-links"
              >
                <Grid
                  item
                  key="footer-link-aviso"
                >
                  <Link href={legalNoticeUri} underline="hover" variant="caption" color="textSecondary">
                    Aviso legal
                    {' '}
                  </Link>
                </Grid>
                <Grid item key="footer-link-copy">
                  <Typography variant="caption" color="textSecondary">
                    {`Copyright © ${new Date().getFullYear()} `}
                  </Typography>
                </Grid>
                <Grid item key="footer-link-upm">
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
              <Grid
                container
                item
                xs={3}
                justifyContent="flex-end"
              >
                <Grid item>
                  <Tooltip arrow title="LinkedIn" key="LinkedInTooltip">
                    <IconButton size="large" key="LinkedIn" aria-label="LinkedIn">
                      <LinkedIn />
                    </IconButton>
                  </Tooltip>
                  <Tooltip arrow title="Instagram" key="InstagramTooltip">
                    <IconButton size="large" key="Instagram" aria-label="Instagram">
                      <Instagram />
                    </IconButton>
                  </Tooltip>
                  <Tooltip arrow title="Twitter" key="TwitterTooltip">
                    <IconButton size="large" key="Twitter" aria-label="Twitter">
                      <Twitter />
                    </IconButton>
                  </Tooltip>
                  <Tooltip arrow title="Youtube" key="YoutubeTooltip">
                    <IconButton size="large" key="Youtube" aria-label="Youtube">
                      <YouTube />
                    </IconButton>
                  </Tooltip>
                  <Tooltip arrow title="Facebook" key="FacebookTooltip">
                    <IconButton size="large" aria-label="Facebook" key="Facebook" edge="end">
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
