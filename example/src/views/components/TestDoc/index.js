import React, { useEffect, useState } from 'react'
import TestDoc from './TestDoc.md'
import ReactMarkdown from 'react-markdown'

export default function (props) {
  const [example, setExample] = useState('')

  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch(TestDoc)
      .then((response) => response.text())
      .then((text) => {
        setExample(text)
      })
  }, [])

  return <ReactMarkdown children={example} />
}
