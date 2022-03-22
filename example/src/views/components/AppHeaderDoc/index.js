import React, { useEffect, useState } from 'react'
import AppHeaderDoc from './AppHeaderDoc.md'
import DocumentationPage from '../../../components/DocumentationPage'
import '../../../css/app.css'
import { uris } from '../../../config/const'
import { Button, Link, Typography, useTheme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import useLayoutExample from '../../../hooks/useLayoutExample'
import propsDoc from '../../../props-doc/props.json'

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  left: {
    textAlign: 'left'
  }
}))

export default function (props) {
  const [example, setExample] = useState('')
  const classes = useStyles()
  const theme = useTheme()
  const { setHeader, header } = useLayoutExample()
  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch(AppHeaderDoc)
      .then((response) => response.text())
      .then((text) => {
        setExample(text)
      })
  }, [])

  const Demo = () => (
    <div className={classes.root}>
      <Button
        variant='contained'
        color='primary'
        onClick={() => setHeader({ ...header, simple: !header.simple })}
      >
        Barra simple
      </Button>
      <Button
        variant='contained'
        color='secondary'
        onClick={() => setHeader({ ...header, icons: !header.icons })}
      >
        Barra con iconos
      </Button>
      <Button
        variant='contained'
        color='primary'
        onClick={() => setHeader({ ...header, components: !header.components })}
      >
        Barra con componentes
      </Button>
    </div>
  )

  const comments = JSON.parse(JSON.stringify(propsDoc))[
    'src\\components\\layout\\AppHeader.js'
  ]
  const entries = Object.entries(comments.props).map((e) => {
    const description = JSON.parse(e[1].description)
    let type = (
      <Typography
        variant='body1'
        style={{ color: theme.palette.tertiary.main }}
      >
        {e[1].type.name}
      </Typography>
    )
    if (e[1].type.name === 'shape') {
      type = (
        <div style={{ textAlign: 'left', color: theme.palette.tertiary.main }}>
          <pre>{JSON.stringify(e[1].type.value, null, 2)}</pre>
        </div>
      )
    }
    return {
      name: <Typography variant='body1'>{e[0]}</Typography>,
      type: type,
      default: <Typography variant='body1'>{description.default}</Typography>,
      required: (
        <Typography variant='body1'>
          {e[1].required ? 'true' : 'false'}
        </Typography>
      ),
      description: <Typography variant='body1'>{description.value}</Typography>
    }
  })
  entries.push(entries.splice(1, 1)[0])

  return (
    <DocumentationPage
      title='AppHeader'
      example={example}
      demo={<Demo />}
      width='lg'
      description={
        <>
          Componente{' '}
          <Link href={uris.materialUriappBar} target={'_blank'}>
            AppBar de @material-ui
          </Link>{' '}
          con elementos configurables
        </>
      }
      api={entries}
    >
      <Typography variant='body1' align='justify'>
        {comments.description}
      </Typography>
    </DocumentationPage>
  )
}
