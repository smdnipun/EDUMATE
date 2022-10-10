import React, { useEffect, useState, useContext } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import axios from 'axios'
import { AuthContext } from '../../../context/AuthContext'
import { NavLink } from 'react-router-dom'
import { TablePagination } from '@mui/material'
import Navigation from '../../common/Navigation/Navigation'

export const ViewLinks = () => {
  const [data, setData] = useState([])
  const [query, setQuery] = useState('')
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const keys = ['subject', 'lesson_name']
  const { user } = useContext(AuthContext)
  const userId = user._id

  const loadData = () => {
    axios.get(`link/get/${userId}`).then((res) => {
      setData(res.data)
      console.log(res.data)
    })
  }

  const deleteLink = (id) => {
    axios.delete(`link/${id}`)
    window.location.reload()
  }

  useEffect(() => {
    loadData()
  }, [])

  const search = (note) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    )
  }

  //pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }
  return (
    <div>
      <Navigation />

      <div
        className=''
        style={{ marginLeft: '0.5%', marginRight: '0.5%', marginTop: '10%' }}
      >
        <div className='border shadow rounded-3 bg-light'>
          <form className='mx-5 mt-5 mb-5'>
            <Paper sx={{ width: '100%' }}>
              <TableContainer sx={{ maxHeight: 600 }}>
                <input
                  type='text'
                  style={{ marginRight: '50%' }}
                  placeholder='search by lesson name....'
                  onChange={(e) => setQuery(e.target.value)}
                />
                <Table stickyHeader aria-label='sticky table'>
                  <TableHead>
                    <TableRow>
                      <TableCell>Subject</TableCell>
                      <TableCell>Lesson name</TableCell>
                      <TableCell>Grade</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Time</TableCell>
                      <TableCell>Link</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .filter((row) =>
                        row.lesson_name.toLowerCase().includes(query)
                      )
                      .map((row) => (
                        <TableRow>
                          <TableCell>{row.subject}</TableCell>
                          <TableCell>{row.lesson_name}</TableCell>
                          <TableCell>{row.grade}</TableCell>
                          <TableCell>{row.date}</TableCell>
                          <TableCell>{row.time}</TableCell>
                          <TableCell>{row.link}</TableCell>
                          <TableCell>
                            <Button
                              variant='outlined'
                              onClick={() => {
                                deleteLink(row._id)
                              }}
                            >
                              Delete
                            </Button>
                            &nbsp; &nbsp;&nbsp;
                            <NavLink to={`/updatelink/${row._id}`}>
                              <Button variant='contained'>Update</Button>
                            </NavLink>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component='div'
                className='m-0'
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </form>
        </div>
      </div>
    </div>
  )
}
