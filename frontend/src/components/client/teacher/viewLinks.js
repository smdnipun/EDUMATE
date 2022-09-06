import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import axios from 'axios'

export const ViewLinks = () => {
    const [data, setData] = useState([])

    const loadData = () => {
        
        axios.get('link/').then((res) => {
            setData(res.data);
            console.log(res.data)
        })
    }
    useEffect(() => {
        loadData();
    },[])

    return (
      <div className='container'>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
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
              {data.map((row) => (
                <TableRow>
                  <TableCell>{row.subject}</TableCell>
                  <TableCell>{row.lesson_name}</TableCell>
                  <TableCell>{row.grade}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.time}</TableCell>
                  <TableCell>{row.link}</TableCell>
                  <TableCell>
                    <Button variant='outlined'>
                      Delete
                    </Button>
                    <Button variant='contained' >
                      Send
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    )
}
