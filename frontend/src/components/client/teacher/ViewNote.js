import React, { useState,useEffect,useContext } from 'react'
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
import { Navbar } from '../../common/Navbar'
import { AuthContext } from '../../../context/AuthContext'

export const ViewNote = () => {
  const [data, setData] = useState([])
   const { user } = useContext(AuthContext)
   const userId = user._id


  const loadData = () => {
    axios.get(`/teacherNote/get/${userId}`).then((res) => {
      setData(res.data)
      console.log(res.data)
    })
  }

  const deleteNote = (id) => {
    axios.delete(`link/${id}`)
       window.location.reload()
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div>
      <Navbar/>
      <div
        className=''
        style={{ marginLeft: '1%', marginRight: '1%', marginTop: '10%' }}
      >
        <div className='border shadow rounded-3 bg-light'>
          <form className='mx-5 mt-5 mb-5'>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>Subject</TableCell>
                    <TableCell>Lesson name</TableCell>
                    <TableCell>Grade</TableCell>
                    <TableCell>Note</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row) => (
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
                        <NavLink to={`/updatenote/${row._id}`}>
                          <Button variant='contained'>Update</Button>
                        </NavLink>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </form>
        </div>
        </div>
      </div>

  )
}
