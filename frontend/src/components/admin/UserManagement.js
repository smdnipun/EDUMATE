import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import TablePagination from '@mui/material/TablePagination'
import { NavLink, useNavigate } from 'react-router-dom'
import AdminNav from '../common/Navigation/AdminNav.js'

function UserManagement() {
  const [data, setData] = useState([])
  const navigate = useNavigate()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    axios.get('http://localhost:5000/api/users/').then((res) => {
      setData(res.data)
    })
  }

  const deleteProfile = async (id) => {
    await axios.delete(`http://localhost:5000/api/users/${id}`).then((res) => {
      window.location.reload()
    })
  }

  return (
    <div>
      <AdminNav />
      <div className='d-flex justify-content-center pt-3'>
        <h1>User Details</h1>
      </div>

      <div className='container mt-4'>
        <input type='text' className='form-control' placeholder='Search...' />
        <div className='mt-2'>
          <Paper sx={{ width: '100%' }}>
            <TableContainer sx={{ maxHeight: 600 }}>
              <Table
                // sx={{ minWidth: 650 }}
                stickyHeader
                aria-label='sticky table'
              >
                <TableHead>
                  <TableRow>
                    <TableCell className='font-weight-bold'>
                      First Name
                    </TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Role</TableCell>
                    <TableCell>Stream</TableCell>
                    <TableCell>Date of Birth</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => (
                      <TableRow>
                        <TableCell>{row.firstName}</TableCell>
                        <TableCell>{row.lastName}</TableCell>
                        <TableCell>{row.type}</TableCell>
                        <TableCell>{row.stream}</TableCell>
                        <TableCell>{row.dateOfBirth}</TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>
                          <NavLink
                            to={`/updateuser/${row._id}`}
                            className='pe-3'
                          >
                            <Button variant='contained'>Update</Button>
                          </NavLink>
                          <Button
                            variant='outlined'
                            onClick={() => {
                              deleteProfile(row._id)
                            }}
                          >
                            Delete
                          </Button>
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
      </div>
    </div>
  )
}

export default UserManagement
