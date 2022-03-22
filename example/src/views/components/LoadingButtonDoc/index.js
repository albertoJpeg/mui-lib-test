import React, { useEffect, useState } from 'react'
import { LoadingButton } from 'upm-react-ui'
import LoadingButtonDoc from './LoadingButtonDoc.md'
import DocumentationPage from '../../../components/DocumentationPage'
import { uris } from '../../../config/const'
import { Link, Typography, useTheme } from '@material-ui/core'
import propsDoc from '../../../props-doc/props.json'

export default function (props) {
  const [loading, setLoading] = useState(false)
  const [example, setExample] = useState('')
  const theme = useTheme()
  const onHandleSubmit = () => {
    setLoading(!loading)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }

  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch(LoadingButtonDoc)
      .then((response) => response.text())
      .then((text) => {
        setExample(text)
      })
  }, [])

  const comments = JSON.parse(JSON.stringify(propsDoc))[
    'src\\components\\buttons\\LoadingButtons.js'
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

  return (
    <DocumentationPage
      title='LoadingButton'
      example={example}
      api={entries}
      demo={
        <>
          <LoadingButton
            color='primary'
            variant='contained'
            onClick={onHandleSubmit}
            loading={loading}
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
        </>
      }
      description={
        <>
          Componente{' '}
          <Link href={uris.materialUriappBar} target='_blank'>
            Button de @material-ui
          </Link>
          , agregando la propiedad de cargando
        </>
      }
    >
      <Typography variant='body1' align='justify'>
        {comments.description}
      </Typography>
    </DocumentationPage>
  )
}
