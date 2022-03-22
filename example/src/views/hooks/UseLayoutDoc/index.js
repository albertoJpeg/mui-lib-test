import React, { useEffect, useState } from 'react'
import UseLayoutDoc from './UseLayoutDoc.md'
import DocumentationPage from '../../../components/DocumentationPage'
import { Link } from 'react-router-dom'
import { Link as NavLink } from '@material-ui/core'
import { routes } from '../../../routes/routes'
import '../../../css/app.css'
import { useLayout } from 'upm-react-ui'

export default function (props) {
  const [example, setExample] = useState('')
  const layout = useLayout()

  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch(UseLayoutDoc)
      .then((response) => response.text())
      .then((text) => {
        setExample(text)
      })
  }, [])

  return (
    <DocumentationPage
      title='useLayout'
      example={example}
      api={[]}
      demo={
        <div style={{ textAlign: 'left' }}>
          <pre>{JSON.stringify(layout, null, 2)}</pre>
        </div>
      }
      description={
        <>
          Hook que expone el contenido de configuración del{' '}
          <Link to={routes.LayoutProviderDoc} className={'no-decoration-link'}>
            <NavLink component='button' variant='h5'>
              LayoutProvider
            </NavLink>
          </Link>
        </>
      }
    />
  )
}
