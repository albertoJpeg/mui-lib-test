import React, { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { lighten, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import DeleteIcon from '@material-ui/icons/Delete'
import FilterListIcon from '@material-ui/icons/FilterList'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import {
  Box,
  Collapse,
  Fade,
  InputAdornment,
  Paper,
  TextField,
  useTheme
} from '@material-ui/core'
import { EmptyData } from '../EmptyData'

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string,
  rowCount: PropTypes.number.isRequired,
  headCells: PropTypes.array.isRequired,
  isCollapseTable: PropTypes.object,
  selectedColumn: PropTypes.bool
}
EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired
}
ComplexTable.propTypes = {
  headCells: PropTypes.array.isRequired,
  data: PropTypes.array,
  selectedColumn: PropTypes.bool,
  rowsPerPageOptions: PropTypes.array,
  dense: PropTypes.bool,
  defaultRowsPerPage: PropTypes.number,
  defaultOrderBy: PropTypes.string,
  labelRowsPerPage: PropTypes.string,
  noDataTitle: PropTypes.string,
  notFoundTitle: PropTypes.string
}
CustomRow.propTypes = {
  row: PropTypes.object,
  index: PropTypes.number,
  selected: PropTypes.array,
  selectedColumn: PropTypes.bool,
  isCollapseTable: PropTypes.object,
  setSelected: PropTypes.func.isRequired
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) return order
    return a[1] - b[1]
  })
  return stabilizedThis.map((el) => el[0])
}

function EnhancedTableHead(props) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    headCells,
    isCollapseTable,
    selectedColumn,
    search
  } = props
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property)
  }

  return (
    <TableHead classes={{ root: classes.tableHead }}>
      <TableRow>
        {selectedColumn && (
          <TableCell padding='checkbox'>
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{ 'aria-label': 'select all desserts' }}
            />
          </TableCell>
        )}
        {isCollapseTable && <TableCell />}

        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.search ? (
              <TextField
                variant='outlined'
                size='small'
                label={headCell.label}
                onChange={search}
                id={`${headCell.id}`}
                style={{ width: '100%' }}
                InputProps={{
                  endAdornment: headCell.sort && (
                    <InputAdornment position='end'>
                      <TableSortLabel
                        active
                        direction={orderBy === headCell.id ? order : 'asc'}
                        onClick={createSortHandler(headCell.id)}
                      />
                    </InputAdornment>
                  )
                }}
              />
            ) : headCell.sort ? (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <span
                    className={classes.visuallyHidden}
                    style={{ marginRight: '2px' }}
                  >
                    {order === 'desc'
                      ? 'sorted descending'
                      : 'sorted ascending'}
                  </span>
                ) : null}
              </TableSortLabel>
            ) : (
              headCell.label
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

function CustomRow(props) {
  const { row, index, selectedColumn, selected, isCollapseTable, setSelected } =
    props
  const labelId = `enhanced-table-checkbox-${index}`
  const [open, setOpen] = React.useState(false)
  const classes = useStyles()
  const isSelected = (name) => selected.indexOf(name) !== -1

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name)
    let newSelected = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      )
    }

    setSelected(newSelected)
  }

  const isItemSelected = isSelected(row.name)

  return (
    <>
      <TableRow
        hover
        role='checkbox'
        aria-checked={isItemSelected}
        tabIndex={-1}
        key={`${row.name}-${row.code}`}
        selected={isItemSelected}
      >
        {selectedColumn && (
          <TableCell
            padding='checkbox'
            onClick={(event) => handleClick(event, row.name)}
          >
            <Checkbox
              checked={isItemSelected}
              inputProps={{ 'aria-labelledby': labelId }}
            />
          </TableCell>
        )}
        {isCollapseTable ? (
          !row.collapse ? (
            <TableCell />
          ) : (
            <TableCell>
              <IconButton
                aria-label='expand row'
                size='small'
                onClick={() => setOpen(!open)}
              >
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </TableCell>
          )
        ) : null}

        {Object.entries(row).map((cell) => {
          if (cell[0] !== 'collapse') {
            return (
              <TableCell
                key={`${cell[0]}-${cell[1]}`}
                align={
                  typeof cell[1] === 'number' || cell[1] === 'No disponible'
                    ? 'right'
                    : 'left'
                }
              >
                {cell[1]}
              </TableCell>
            )
          } else {
            return null
          }
        })}
      </TableRow>
      {row.collapse ? (
        <TableRow className={classes.root}>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
            <Collapse in={open} timeout='auto' unmountOnExit>
              <Box margin={3}>{row.collapse}</Box>
            </Collapse>
          </TableCell>
        </TableRow>
      ) : (
        <></>
      )}
    </>
  )
}

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1)
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85)
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark
        },
  title: {
    flex: '1 1 100%'
  }
}))

function EnhancedTableToolbar(props) {
  const classes = useToolbarStyles()
  const { numSelected } = props

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color='inherit'
          variant='subtitle1'
          component='div'
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          className={classes.title}
          variant='h6'
          id='tableTitle'
          component='div'
        >
          Nutrition
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title='Delete'>
          <IconButton aria-label='delete'>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title='Filter list'>
          <IconButton aria-label='filter list'>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '100%',
    '& > *': {
      borderBottom: 'unset'
    }
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: 750
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1
  },
  tableHead: {
    background: theme.palette.grey['50']
  }
}))

export function ComplexTable(props) {
  const classes = useStyles()
  const theme = useTheme()
  const {
    headCells,
    data,
    selectedColumn,
    dense,
    rowsPerPageOptions,
    defaultRowsPerPage,
    defaultOrderBy,
    labelRowsPerPage,
    noDataTitle,
    notFoundTitle
  } = props
  const [order, setOrder] = useState('asc')
  const [orderBy, setOrderBy] = useState(defaultOrderBy)
  const [selected, setSelected] = useState([])
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage)
  const [filteredData, setFilteredData] = useState(data)
  const sortedPage = stableSort(
    filteredData,
    getComparator(order, orderBy)
  ).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

  const isCollapseTable = sortedPage.find((row) => row.collapse)
  const [filters, setFilters] = useState(
    headCells
      .filter((head) => head.search !== undefined)
      .map((h) => ({ id: h.id, value: '' }))
  )

  const handleSearch = (event) => {
    const index = filters.findIndex((filter) => filter.id === event.target.id)
    const tmpFilter = [...filters]
    tmpFilter[index].value = event.target.value
    setFilters(tmpFilter)

    let tmpData = [...data]
    filters.forEach((filter) => {
      tmpData = tmpData.filter((row) => {
        return row[filter.id]
          .toString()
          .toLowerCase()
          .includes(filter?.value.toLowerCase())
      })
    })
    setFilteredData(tmpData)
  }

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = filteredData.map((n) => n.name)
      setSelected(newSelecteds)
      return
    }
    setSelected([])
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, filteredData.length - page * rowsPerPage)

  const displayRowLabels = ({ from, to, count }) => {
    return `${from}-${to} de ${count}`
  }

  if (data.length === 0) {
    return (
      <Paper variant='outlined'>
        <EmptyData title={noDataTitle} />
      </Paper>
    )
  }

  return (
    <Fade in timeout={theme.transitions.duration.complex}>
      <div className={classes.root}>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby='tableTitle'
            size={dense ? 'small' : 'medium'}
            aria-label='enhanced table'
          >
            {filteredData.length === 0 && <caption>{notFoundTitle}</caption>}
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              search={handleSearch}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={filteredData.length}
              headCells={headCells}
              selectedColumn={selectedColumn}
              isCollapseTable={isCollapseTable}
            />
            <TableBody>
              {sortedPage.map((row, index) => {
                return (
                  <CustomRow
                    dense={dense}
                    setSelected={setSelected}
                    selected={selected}
                    selectedColumn={selectedColumn}
                    isCollapseTable={isCollapseTable}
                    key={`customRow-${row.name}-${index}`}
                    row={row}
                    index={index}
                  />
                )
              })}
              {emptyRows > 0 &&
                (filteredData.length > rowsPerPage ||
                  filteredData.length > 5) && (
                  <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                    <TableCell colSpan={12} />
                  </TableRow>
                )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={rowsPerPageOptions}
          labelDisplayedRows={displayRowLabels}
          labelRowsPerPage={labelRowsPerPage}
          component='div'
          count={filteredData.length}
          rowsPerPage={rowsPerPage || 5}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </div>
    </Fade>
  )
}
