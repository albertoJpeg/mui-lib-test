import React from 'react'
import { Grid, Link, ListItem, List, Typography } from '@mui/material'

import whiteLogo from '../../images/escudo_blanco.png'
import { UPMFooter } from './UPMFooter'

function AppFooterColumn (props) {
  const { items, title, uri } = props

  return (
    <Grid
      item
      sm={12} md={12} lg={12} xs={24}
    >
      <Grid
        container
        justifyContent={{
          xs: 'center',
          sm: 'flex-start',
          md: 'flex-start',
          lg: 'flex-start',
          xl: 'flex-start'
        }}
      >
        <List
          disableGutters
          disablePadding
        >
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
                    cursor: 'pointer',
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
            xs: 'center'
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
                  <Grid
                    container
                    justifyContent={{
                      xs: 'center',
                      sm: 'flex-start',
                      md: 'flex-start',
                      lg: 'flex-start',
                      xl: 'flex-start'
                    }}
                  >
                    <AppFooterColumn
                      title={c.title}
                      uri={c.uri}
                      items={c.items}
                    />
                  </Grid>
                </Grid>
                )))
          }
          <Grid item lg={4} xs={0}/>

          <Grid item lg={8} md={12} xs={24} >
            <Grid
              container
              columns={24}
              rowSpacing={3}
              justifyContent={{
                xs: 'flex-start',
                sm: 'center'
              }}
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
                    md: 'flex-start',
                    xl: 'flex-end',
                    lg: 'flex-end',
                    sm: 'flex-end',
                    xs: 'center'
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
      <UPMFooter legalNoticeUri={legalNoticeUri}/>
    </React.Fragment>
  )
}
