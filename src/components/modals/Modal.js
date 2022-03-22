import React from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography
} from '@material-ui/core'
import PropTypes from 'prop-types'
import { LoadingButton } from '../buttons/LoadingButtons'

LoadingButton.propTypes = {
  title: PropTypes.string,
  content: PropTypes.any,
  open: PropTypes.bool.isRequired,
  rightButtonText: PropTypes.string,
  leftButtonText: PropTypes.string,
  handleSubmit: PropTypes.func,
  loading: PropTypes.bool,
  setOpen: PropTypes.func
}

export function Modal(props) {
  const {
    title,
    content,
    open,
    rightButtonText,
    leftButtonText,
    handleSubmit,
    loading,
    setOpen
  } = props

  return (
    <Dialog open={open} fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {typeof content === 'string' ? (
          <Typography variant='body2'>{content}</Typography>
        ) : (
          content
        )}
      </DialogContent>
      <DialogActions>
        {leftButtonText && (
          <Button onClick={() => setOpen(false)} disabled={loading}>
            {leftButtonText}
          </Button>
        )}

        <LoadingButton
          variant='contained'
          color='primary'
          onClick={handleSubmit}
          loading={loading}
        >
          {rightButtonText}
        </LoadingButton>
      </DialogActions>
    </Dialog>
  )
}
