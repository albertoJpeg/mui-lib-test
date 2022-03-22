import React, { useEffect, useState } from 'react'
import AppContainerDoc from './AppContainerDoc.md'
import DocumentationPage from '../../../components/DocumentationPage'
import '../../../css/app.css'
import propsDoc from '../../../props-doc/props.json'
import { Typography, useTheme } from '@material-ui/core'

export default function (props) {
  const [example, setExample] = useState('')
  const theme = useTheme()
  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch(AppContainerDoc)
      .then((response) => response.text())
      .then((text) => {
        setExample(text)
      })
  }, [])

  const comments = JSON.parse(JSON.stringify(propsDoc))[
    'src\\components\\layout\\AppContainer.js'
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
      title='AppContainer'
      example={example}
      api={entries}
      description='Contenedor de las páginas de la aplicación'
    >
      <Typography variant='body1' align='justify'>
        {comments.description}
      </Typography>
    </DocumentationPage>
  )
}
