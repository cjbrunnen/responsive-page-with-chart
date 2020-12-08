import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { lighten, makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
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
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import DeleteIcon from '@material-ui/icons/Delete'
import FilterListIcon from '@material-ui/icons/FilterList'

function createData(name, rank, first, last, climber, faller) {
  return { name, rank, first, last, climber, faller }
}

const rows = [
  createData(
    '2020 Q4',
    '109th',
    'Comhairle nan Eilean Siar',
    'States of Guernsey',
    'Stevenage Borough Council(+363)',
    'Stroud District Council (-252)'
  ),
  createData(
    '2020 Q3',
    '343rd',
    'North Devon Council',
    'States of Guernsey',
    'East of England (EELGA)(+393)',
    'Redbridge London Borough Council (-248)'
  ),
  createData(
    '2020 Q2',
    '295th',
    'Richmondshire District Council',
    'States of Guernsey',
    'Chesterfield Borough Council (+393)',
    'Welwyn Hatfield Borough Council (-218)'
  ),
  createData(
    '2020 Q1',
    '344th',
    'Blaby District Council',
    'Chesterfield Borough Council',
    'Wakefield Council (+273)',
    'Leicester City Council (-211)'
  ),
  createData(
    '2019 Q4',
    '133rd',
    'Blaby District Council',
    'Derbyshire Dales District Council',
    'Broxbourne Borough Council (+365)',
    'Crawley Borough Council (-245)'
  ),
  createData(
    '2019 Q3',
    '106th',
    'North Devon Council',
    'South Lanarkshire Council',
    'Barnsley Metropolitan Borough Council (+181)',
    'North Norfolk District Council (-221)'
  ),
  createData(
    '2019 Q2',
    '103rd',
    'Harrogate Borough Council',
    'Burnley Borough Council',
    'Blaby District Council (+309)',
    'East Staffordshire Borough Council (-242)'
  ),
  createData(
    '2019 Q1',
    '158th',
    'Richmondshire District Council',
    'Tunbridge Wells Borough Council',
    'Daventry District Council (+324)',
    'Woking Borough Council (-302)'
  ),
  createData(
    '2018 Q4',
    '100th',
    'Harrogate Borough Council',
    'Burnley Borough Council',
    'Bolton Council (+265)',
    'Sevenoaks District Council (-337)'
  ),
  createData(
    '2018 Q3',
    '48th',
    'Harrogate Borough Council',
    'Chesterfield Borough Council',
    'South Cambridgeshire District Council (+228)',
    'Wirral Council (-263)'
  ),
  createData(
    '2018 Q2',
    '89th',
    'Harrogate Borough Council',
    'Daventry District Council',
    'Aberdeen City Council (+283)',
    'Solihull Metropolitan Borough Council (-233)'
  ),
  createData(
    '2018 Q1',
    '152nd',
    'Harrogate Borough Council',
    'Chesterfield Borough Council',
    'Stoke-on-Trent City Council (+209)',
    'Aberdeen City Council (-283)'
  ),
  createData(
    '2017 Q4',
    '63rd',
    'Taunton Deane Borough Council',
    'The City of Cardiff Council',
    'Cherwell District Council (+262)',
    'Royal Borough of Greenwich Council (-327)'
  ),
  createData(
    '2017 Q3',
    '76th',
    'Lewes District Council',
    'The City of Cardiff Council',
    'Stoke-on-Trent City Council (+350)',
    'Angus Council (-308)'
  )
]

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

const headCells = [
  { id: 'name', numeric: false, disablePadding: false, label: 'INDEX' },
  { id: 'rank', numeric: false, disablePadding: false, label: 'Rank' },
  { id: 'first', numeric: false, disablePadding: false, label: 'First' },
  { id: 'last', numeric: false, disablePadding: false, label: 'Last' },
  { id: 'climber', numeric: false, disablePadding: false, label: 'Climber' },
  { id: 'faller', numeric: false, disablePadding: false, label: 'Faller' }
]

function EnhancedTableHead(props) {
  const {
    classes,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort
  } = props
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property)
  }

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
}

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    marginTop: '30px',
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

const EnhancedTableToolbar = (props) => {
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
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Council Rankings
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  )
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
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
  }
}))

export default function EnhancedTable() {
  const classes = useStyles()
  const [order, setOrder] = React.useState('asc')
  const [orderBy, setOrderBy] = React.useState('calories')
  const [selected, setSelected] = React.useState([])
  const [page, setPage] = React.useState(0)
  const [dense, setDense] = React.useState(false)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  // const handleSelectAllClick = (event) => {
  //   if (event.target.checked) {
  //     const newSelecteds = rows.map((n) => n.name)
  //     setSelected(newSelecteds)
  //     return
  //   }
  //   setSelected([])
  // }

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

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleChangeDense = (event) => {
    setDense(event.target.checked)
  }

  const isSelected = (name) => selected.indexOf(name) !== -1

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)

  return (
    <Container maxWidth="md">
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <EnhancedTableToolbar numSelected={selected.length} />
          <TableContainer>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              size={dense ? 'small' : 'medium'}
              aria-label="enhanced table"
            >
              <EnhancedTableHead
                classes={classes}
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.name)
                    const labelId = `enhanced-table-checkbox-${index}`

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.name)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.name}
                        selected={isItemSelected}
                      >
                        <TableCell component="th" id={labelId} scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.rank}</TableCell>
                        <TableCell align="right">{row.first}</TableCell>
                        <TableCell align="right">{row.last}</TableCell>
                        <TableCell align="right">{row.climber}</TableCell>
                        <TableCell align="right">{row.faller}</TableCell>
                      </TableRow>
                    )
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
        <FormControlLabel
          control={<Switch checked={dense} onChange={handleChangeDense} />}
          label="Dense padding"
        />
      </div>
    </Container>
  )
}
