import React, { useState } from 'react'
import { Menu, IconButton, Tooltip, Button } from '@material-ui/core'

export default function MenuButton(props) {
  const {
    element,
    iconButton,
    title,
    icon,
    tooltip,
    children,
    open,
    ...buttonProps
  } = props
  const [anchorEl, setAnchorEl] = useState(element)

  function handleClick(event) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }

  const renderIconButton = tooltip ? (
    <Tooltip title={tooltip} arrow>
      <IconButton {...buttonProps} onClick={handleClick}>
        {icon}
        {title}
      </IconButton>
    </Tooltip>
  ) : (
    <IconButton {...buttonProps} onClick={handleClick}>
      {icon}
      {title}
    </IconButton>
  )
  const renderButton = tooltip ? (
    <Tooltip title={tooltip} arrow>
      <Button {...buttonProps} onClick={handleClick}>
        {icon}
        {title}
      </Button>
    </Tooltip>
  ) : (
    <Button {...buttonProps} onClick={handleClick}>
      {icon}
      {title}
    </Button>
  )

  return (
    <>
      {iconButton ? renderIconButton : renderButton}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        disableScrollLock
      >
        {children}
      </Menu>
    </>
  )
}
