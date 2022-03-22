import React from 'react'
import Container from '@material-ui/core/Container'
import {
  Card,
  CardContent,
  useTheme,
  Typography,
  Fade
} from '@material-ui/core'
import { sizes } from '../config/const'
import ExampleCode from '../components/ExampleCode'
import { makeStyles } from '@material-ui/core/styles'
import { SimpleTable } from 'upm-react-ui'

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}))

export default function (props) {
  const theme = useTheme()
  const classes = useStyles()
  const { title, description, children, example, api, width, demo } = props

  const headers = [
    {
      id: 'name',
      align: 'left',
      disablePadding: false,
      label: 'Nombre'
    },
    {
      id: 'type',
      align: 'left',
      disablePadding: false,
      label: 'Tipo'
    },
    {
      id: 'default',
      align: 'left',
      disablePadding: false,
      label: 'Valor por defecto'
    },
    {
      id: 'required',
      align: 'left',
      disablePadding: false,
      label: 'Requerido'
    },
    {
      id: 'description',
      align: 'left',
      disablePadding: false,
      label: 'Descripción'
    }
  ]

  console.log(api)
  return (
    <Fade in timeout={400}>
      <Container
        maxWidth={width || 'md'}
        style={{
          paddingTop: sizes.padding2em,
          paddingBottom: sizes.padding2em
        }}
      >
        <Typography variant='h1'>{title}</Typography>
        <Typography variant='h5' style={{ marginBottom: theme.spacing(3) }}>
          {description}
        </Typography>
        {children}

        <Typography variant='h2' gutterBottom>
          Ejemplos
        </Typography>
        {demo && (
          <Card variant='outlined'>
            <CardContent className={classes.root}>{demo}</CardContent>
          </Card>
        )}
        <ExampleCode example={example} />
        {api && (
          <>
            <Typography variant='h2'>API</Typography>
            <SimpleTable data={api} headCells={headers} />
          </>
        )}
      </Container>
    </Fade>
  )
}
