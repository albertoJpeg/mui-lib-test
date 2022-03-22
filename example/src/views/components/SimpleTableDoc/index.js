import React, { useEffect, useState } from 'react'
import { SimpleTable } from 'upm-react-ui'
import SimpleTableDoc from './SimpleTableDoc.md'
import DocumentationPage from '../../../components/DocumentationPage'

export default function (props) {
  const [example, setExample] = useState('')

  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch(SimpleTableDoc)
      .then((response) => response.text())
      .then((text) => {
        setExample(text)
      })
  }, [])

  const Demo = () => {
    const header = [
      {
        id: 'year',
        numeric: false,
        disablePadding: false,
        sort: true,
        label: 'Año'
      },
      {
        id: 'name',
        numeric: false,
        search: true,
        disablePadding: false,
        sort: false,
        label: 'Nombre'
      },
      {
        id: 'role',
        numeric: false,
        sort: true,
        disablePadding: false,
        label: 'Posición'
      }
    ]
    const cells = [
      { year: '2018-19', name: 'Didac Aroca', role: 'Profesor adjunto' },
      { year: '2018-19', name: 'Modesta Murillo', role: 'Profesor adjunto' },
      { year: '2018-19', name: 'Obi Wan Kenobi', role: 'Profesor adjunto' },
      { year: '2019-20', name: 'Jabba el Hutt', role: 'Profesor adjunto' },
      {
        year: '2019-20',
        name: 'Lando Calrissian',
        role: 'Director de departamento'
      },
      { year: '2019-20', name: 'Tom Bombadil', role: 'Director de escuela' }
    ]
    return <SimpleTable headCells={header} data={cells} />
  }

  return (
    <DocumentationPage
      title='CustomTable'
      example={example}
      api={[]}
      demo={<Demo />}
      description='Tabla customizable de datos'
    />
  )
}
