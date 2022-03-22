import React, { useEffect, useState } from 'react'
import { VerticalItemButton } from 'upm-react-ui'
import VerticalItemButtonDoc from './VerticalItemButtonDoc.md'
import DocumentationPage from '../../../components/DocumentationPage'
import { makeStyles } from '@material-ui/core/styles'
import ReactIcon from '../../../images/icons/ReactIcon'
import { Grid, useTheme } from '@material-ui/core'
import HookIcon from '../../../images/icons/HookIcon'
import HomeIcon from '@material-ui/icons/Home'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  backgroundColor: {
    backgroundColor: theme.palette.primary.main
  }
}))

export default function (props) {
  const [example, setExample] = useState('')
  const classes = useStyles()
  const theme = useTheme()

  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch(VerticalItemButtonDoc)
      .then((response) => response.text())
      .then((text) => {
        setExample(text)
      })
  }, [])

  return (
    <DocumentationPage
      title='VerticalItemButton'
      example={example}
      api={[]}
      demo={
        <Grid container>
          <Grid
            item
            md={6}
            xs={12}
            className={`${classes.backgroundColor} ${classes.root}`}
          >
            <VerticalItemButton icon={<ReactIcon />} text='Componentes React' />
            <VerticalItemButton
              icon={<ReactIcon />}
              text='Componentes React'
              selected
            />
            <VerticalItemButton icon={<HomeIcon />} text='Inicio' selected />

            <VerticalItemButton
              icon={<HookIcon />}
              text='Ejemplos Hooks'
              colors={{
                text: theme.palette.error.main
              }}
            />
          </Grid>
          <Grid item md={6} xs={12} className={classes.root}>
            <VerticalItemButton
              icon={<ReactIcon />}
              text='Componentes React'
              colors={{
                text: theme.palette.primary.main
              }}
            />
            <VerticalItemButton
              icon={<ReactIcon />}
              text='Componentes React'
              selected
              colors={{
                text: theme.palette.primary.main,
                selectedText: theme.palette.success.main
              }}
            />
            <VerticalItemButton icon={<HomeIcon />} text='Inicio' selected />
            <VerticalItemButton
              icon={<HookIcon />}
              text='Ejemplos Hooks'
              colors={{
                text: theme.palette.error.main
              }}
            />
          </Grid>
        </Grid>
      }
      description={<>Botón con icono y descripción debajo</>}
    />
  )
}
