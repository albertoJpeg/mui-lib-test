import React, { useEffect, useState } from 'react'
import AppDrawerDoc from './AppDrawerDoc.md'
import DocumentationPage from '../../../components/DocumentationPage'
import '../../../css/app.css'
import { Button, Typography, useTheme } from '@material-ui/core'
import useLayoutExample from '../../../hooks/useLayoutExample'
import propsDoc from '../../../props-doc/props.json'

export default function (props) {
  const [example, setExample] = useState('')
  const { setDrawer, drawer } = useLayoutExample()
  const theme = useTheme()
  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch(AppDrawerDoc)
      .then((response) => response.text())
      .then((text) => {
        setExample(text)
      })
  }, [])

  const comments = JSON.parse(JSON.stringify(propsDoc))[
    'src\\components\\layout\\AppDrawer.js'
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
    if (e[1].type.name === 'arrayOf') {
      type = (
        <div style={{ textAlign: 'left', color: theme.palette.tertiary.main }}>
          <pre>{`[ ${JSON.stringify(e[1].type.value.value, null, 2)} ]`}</pre>
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
  entries.push(entries.splice(0, 1)[0])

  return (
    <DocumentationPage
      title='AppDrawer'
      example={example}
      api={entries}
      demo={
        <Button
          variant='contained'
          color='secondary'
          onClick={() => setDrawer(!drawer)}
        >
          Alternar Drawer
        </Button>
      }
      description={<>Drawer Básico y responsive</>}
    >
      <Typography variant='body1' align='justify'>
        {comments.description}
      </Typography>
    </DocumentationPage>
  )
}
