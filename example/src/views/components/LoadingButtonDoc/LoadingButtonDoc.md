import React, { useState } from 'react'
import { LoadingButton } from 'upm-react-ui'
import { Button, Card, CardActions, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  exampleCard: {
    marginTop: theme.spacing(2)
  },
  alignRight: {
    marginLeft: 'auto'
  }
}))

export default function LoadingButtonDoc(props) {
  const [loading, setLoading] = useState(false)
  const classes = useStyles()
  const onHandleSubmit = () => {
    setLoading(!loading)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }

  return (
    <Card variant='outlined' className={classes.exampleCard}>
      <CardContent>
        <div className={classes.root}>
          <LoadingButton
            variant='contained'
            onClick={onHandleSubmit}
            loading={loading}
            color='primary'
          >
            Default
          </LoadingButton>
          <LoadingButton
            variant='contained'
            color='secondary'
            onClick={onHandleSubmit}
            loading={loading}
          >
            Secondary
          </LoadingButton>
          <LoadingButton
            variant='outlined'
            color='primary'
            onClick={onHandleSubmit}
            loading={loading}
          >
            outlined
          </LoadingButton>
          <LoadingButton
            variant='text'
            onClick={onHandleSubmit}
            loading={loading}
          >
            Text
          </LoadingButton>
        </div>
      </CardContent>
      <CardActions disableSpacing>
        <Button color='primary' onClick={onHandleSubmit}>
          Simular submit
        </Button>
      </CardActions>
    </Card>
  )
}

