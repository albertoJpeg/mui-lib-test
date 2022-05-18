import React from 'react'
import {
  Grid, Link, List, ListItem, Typography,
} from '@mui/material'

export default function AppFooterColumn(props) {
  const { items, title, uri } = props

  return (
    <Grid
      item
      sm={12}
      md={12}
      lg={12}
      xs={24}
    >
      <Grid
        container
        justifyContent={{
          xs: 'center',
          sm: 'flex-start',
          md: 'flex-start',
          lg: 'flex-start',
          xl: 'flex-start',
        }}
      >
        <List
          disableGutters
          disablePadding
        >
          <ListItem
            sx={{
              p: (theme) => theme.spacing(0, 2, 0, 2),
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: (theme) => theme.palette.primary.contrastText,
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
                  color: (theme) => theme.palette.primary.contrastText,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    cursor: 'pointer',
                    color: (theme) => theme.palette.primary.contrastText,
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
