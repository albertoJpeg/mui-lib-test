import React from 'react'
import { Box, IconButton, Toolbar, AppBar, Tooltip, InputBase, Badge } from '@mui/material'
import {
  Apps,
  NotificationsNoneOutlined,
  Menu,
  HelpOutline,
  AccountCircleOutlined,
  SearchOutlined
} from '@mui/icons-material'
import { styled, alpha } from '@mui/material/styles'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginLeft: 0,
  marginRight: theme.spacing(1),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto'
  }
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch'
      }
    }
  }
}))

export const CustomAppBar = props => {
  const { logo = null, notifications = [] } = props

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          disableGutters
          sx={{
            p: theme => theme.spacing(0, 1)
          }}
        >
          <IconButton
            size="large"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: '20px' }}
          >
            <Menu />
          </IconButton>
          <React.Fragment sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            {
              logo
                ? <img src={logo} alt="" style={{ height: 36 }}/>
                : null
            }
          </React.Fragment>

          <Box sx={{ flexGrow: 1 }} />
          <Search>
            <SearchIconWrapper>
              <SearchOutlined />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Buscar…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Tooltip title={'Ayuda'}>
              <IconButton size="large" aria-label="Ayuda" color="inherit">
                <HelpOutline />
              </IconButton>
            </Tooltip>
            <Tooltip title={'Más aplicaciones'}>
              <IconButton size="large" aria-label="Más aplicaciones" color="inherit">
                <Apps />
              </IconButton>
            </Tooltip>
            <Tooltip title={'Notificaciones'}>
              <IconButton
                size="large"
                aria-label="Notificaciones"
                color="inherit"
              >
                {
                  notifications.length > 0
                    ? (
                      <Badge badgeContent={notifications.length} color="secondary" component='div'>
                        <NotificationsNoneOutlined />
                      </Badge>
                      )
                    : <NotificationsNoneOutlined />
                }
              </IconButton>
            </Tooltip>
            <Tooltip title={'Usuario'}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircleOutlined />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
