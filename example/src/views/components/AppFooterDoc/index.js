import React, { useEffect, useState } from 'react'
import AppFooterDoc from './AppFooterDoc.md'
import DocumentationPage from '../../../components/DocumentationPage'
import '../../../css/app.css'
import { Button, Typography, useTheme } from '@material-ui/core'
import useLayoutExample from '../../../hooks/useLayoutExample'
import propsDoc from '../../../props-doc/props.json'

export default function (props) {
  const [example, setExample] = useState('')
  const { setFooter, footer } = useLayoutExample()
  const theme = useTheme()
  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch(AppFooterDoc)
      .then((response) => response.text())
      .then((text) => {
        setExample(text)
      })
  }, [])

  const comments = JSON.parse(JSON.stringify(propsDoc))[
    'src\\components\\layout\\AppFooter.js'
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

  return (
    <DocumentationPage
      title='AppFooter'
      example={example}
      api={entries}
      demo={
        <>
          <Button
            variant='contained'
            color='primary'
            onClick={() => setFooter({ ...footer, options: !footer.options })}
          >
            Footer con opciones (cambios en el footer)
          </Button>
          <Button
            variant='contained'
            color='secondary'
            onClick={() => setFooter({ ...footer, icons: !footer.icons })}
          >
            Redes sociales (cambios en el footer)
          </Button>
        </>
      }
      description={<>Footer con doble nivel (generico y de aplicación)</>}
    >
      <Typography variant='body1' align='justify'>
        {comments.description}
      </Typography>
    </DocumentationPage>
  )
}
