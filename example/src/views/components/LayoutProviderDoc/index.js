import React, { useEffect, useState } from 'react'
import LayoutProviderDoc from './LayoutProviderDoc.md'
import DocumentationPage from '../../../components/DocumentationPage'
import '../../../css/app.css'

export default function (props) {
  const [example, setExample] = useState('')

  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch(LayoutProviderDoc)
      .then((response) => response.text())
      .then((text) => {
        setExample(text)
      })
  }, [])

  return (
    <DocumentationPage
      title='LayoutProvider'
      example={example}
      description={<>Provider que reune las configuraciones del el Layout</>}
    />
  )
}
