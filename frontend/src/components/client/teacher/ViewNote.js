import React, { useState, useEffect, useContext } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import Navigation from '../../common/Navigation/Navigation'
import { AuthContext } from '../../../context/AuthContext'
import { TablePagination } from '@mui/material'
import Swal from 'sweetalert2'

export const ViewNote = () => {
  const [data, setData] = useState([])
  const [query, setQuery] = useState('')
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const keys = ['subject', 'lesson_name']

  const { user } = useContext(AuthContext)
  const userId = user._id

  const search = (note) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    )
  }

  const loadData = () => {
    axios.get(`/teacherNote/get/${userId}`).then((res) => {
      setData(res.data)
      console.log(res.data)
    })
  }

  const deleteNote = (id) => {
    axios.delete(`/teacherNote/${id}`)
      Swal.fire({
        icon: 'success',
        title: 'Deleted',
      })
      
    window.location.reload()
  }

  useEffect(() => {
    loadData()
  }, [])

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
        style={{ marginLeft: '1%', marginRight: '1%', marginTop: '10%' }}
      >
        <div className='border shadow rounded-3 bg-light'>
          <form className='mx-5 mt-5 mb-5'>
            <div>
              <Paper sx={{ width: '100%' }}>
                <TableContainer sx={{ maxHeight: 600 }}>
                  <div className=''>
                    <input
                      type='text'
                      style={{ marginRight: '50%' }}
                      placeholder='search by lesson name....'
                      onChange={(e) => setQuery(e.target.value)}
                    />
                  </div>
                  <Table stickyHeader aria-label='sticky table'>
                    <TableHead>
                      <TableRow>
                        <TableCell>Subject</TableCell>
                        <TableCell>Lesson name</TableCell>
                        <TableCell>Grade</TableCell>
                        <TableCell>Note</TableCell>
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
                            <TableCell>{row.note}</TableCell>
                            <TableCell>
                              <Button
                                variant='outlined'
                                onClick={() => {
                                  deleteNote(row._id)
                                }}
                              >
                                Delete
                              </Button>
                              &nbsp; &nbsp;&nbsp;
                              <NavLink to={`/updatenote/${row._id}`}>
                                <Button variant='contained'>Update</Button>
                              </NavLink>
                              &nbsp; &nbsp;&nbsp;
                              <NavLink to={`/viewComments/${row._id}`}>
                                <Button variant='contained'>
                                  View Comments
                                </Button>
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
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
