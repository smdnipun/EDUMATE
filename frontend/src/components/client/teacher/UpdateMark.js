import React, { useEffect, useState,useContext } from 'react'
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

export const UpdateMark = () => {
    const [data, setData] = useState([])
      const { user } = useContext(AuthContext)
  const userId = user._id

  const loadData = () => {
    axios.get(`/mark/getto/${userId}`).then((res) => {
      setData(res.data)
    })
  }

  useEffect(() => {
    loadData()
  }, [])
  return (
    <div
        className=''
        style={{ marginLeft: '0.5%', marginRight: '0.5%', marginTop: '10%' }}
      >
        <div className='border shadow rounded-3 bg-light'>
          <form className='mx-5 mt-5 mb-5'>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Answer</TableCell>
                <TableCell>Subject</TableCell>
                <TableCell>Grade</TableCell>
                <TableCell>Student</TableCell>
                <TableCell>Mark</TableCell>
                <TableCell>Comment</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow>
                  <TableCell>{row.answer_id}</TableCell>
                  <TableCell>{row.subject}</TableCell>
                  <TableCell>{row.grade}</TableCell>
                  <TableCell>{row.student_id}</TableCell>
                  <TableCell>{row.mark}</TableCell>
                  <TableCell>{row.comment}</TableCell>
                  <TableCell>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
                    </TableContainer>
                       </form>
          </div>
          </div>
  )
}
