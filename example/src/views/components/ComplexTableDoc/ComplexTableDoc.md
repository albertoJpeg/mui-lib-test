
import React from 'react'
import Container from '@material-ui/core/Container'
import { Grid } from '@material-ui/core'
import { sizes } from '../config/const'
import { ComplexTable } from 'upm-react-ui'

export default function ComplexTableDoc(props) {
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

  return (
    <Container maxWidth='md' style={{ paddingTop: sizes.paddingTopContainer }}>
      <ComplexTable
        headCells={header}
        data={cells}
        defaultRowsPerPage={5}
        defaultOrderBy='year'
        labelRowsPerPage={'profesores'}
        rowsPerPageOptions={[5, 10]}
      />
    </Container>
  )
}
