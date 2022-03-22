import React from 'react'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { Fade, Paper, TableCell, useTheme } from '@material-ui/core'
import TableBody from '@material-ui/core/TableBody'
import { makeStyles } from '@material-ui/core/styles'
import { EmptyData } from '../EmptyData'

const useStyles = makeStyles((theme) => ({
  tableHead: {
    background: theme.palette.grey['50']
  },
  body1: {
    fontSize: '1rem'
  }
}))

export function SimpleTable(props) {
  const { headCells, data } = props
  const classes = useStyles()
  const theme = useTheme()

  if (data.length === 0) {
    return (
      <Paper variant='outlined'>
        <EmptyData title='Sin datos' />
      </Paper>
    )
  }

  return (
    <Fade in timeout={theme.transitions.duration.complex}>
      <TableContainer>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              {headCells.map((headCell, index) => {
                return (
                  <TableCell
                    key={`${headCell.id}-${index}`}
                    align={headCell.align}
                    classes={{ root: classes.body1 }}
                    padding={headCell.disablePadding ? 'none' : 'default'}
                    style={headCell.style}
                  >
                    {headCell.label}
                  </TableCell>
                )
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={`${row}-${row}-${index}`}>
                {Object.entries(row).map((cell, index) => {
                  return (
                    <TableCell
                      key={`${cell[0]}-${cell[1]}-${index}`}
                      align={headCells[index].align}
                    >
                      {cell[1]}
                    </TableCell>
                  )
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fade>
  )
}
