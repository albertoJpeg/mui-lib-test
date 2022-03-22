import React, { useEffect, useState } from 'react'
import EmptyDataDoc from './EmptyDataDoc.md'
import DocumentationPage from '../../../components/DocumentationPage'
import '../../../css/app.css'
import { EmptyData } from 'upm-react-ui'

export default function (props) {
  const [example, setExample] = useState('')
  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch(EmptyDataDoc)
      .then((response) => response.text())
      .then((text) => {
        setExample(text)
      })
  }, [])

  return (
    <DocumentationPage
      title='EmptyData'
      example={example}
      api={[]}
      demo={
        <>
          <EmptyData title='No se han encontrado datos (variante outline)' />
          <EmptyData
            title='No se han encontrado datos (variante elevation)'
            variant='elevation'
          />
        </>
      }
      description='Componente para cuando no se han encontrado datos'
    />
  )
}
