import React, { useEffect, useState } from 'react'
import UseLayoutDoc from './UseWindowSizeDoc.md'
import DocumentationPage from '../../../components/DocumentationPage'
import '../../../css/app.css'
import { useWindowSize } from 'upm-react-ui'

export default function (props) {
  const [example, setExample] = useState('')
  const window = useWindowSize()
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
      title='useWindowSize'
      example={example}
      api={[]}
      demo={
        <div style={{ textAlign: 'left' }}>
          <pre>{JSON.stringify(window, null, 2)}</pre>
        </div>
      }
      description={
        <>Hook que devuelve el tamaño de la pantalla dinámicamente</>
      }
    />
  )
}
