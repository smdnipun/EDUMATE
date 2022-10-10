import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Alert from '@mui/material/Alert'
import { useParams, useNavigate } from 'react-router-dom'
import { Navbar } from '../../common/Navbar'
import { Box } from '@mui/system'
import { CssBaseline, TextField } from '@mui/material'
import { AuthContext } from '../../../context/AuthContext'

const drawerWidth = 240

export const ViewComments = () => {
  const hr = {
    borderLeft: '6px solid green',
    height: '300px',
  }

  const [comment, setComment] = useState([])

  const params = useParams()
  console.log(params)

  const getLink = () => {
    axios.get(`/comment/get/${params.id}`).then((res) => {
      setComment(res.data)
    })
  }

  useEffect(() => {
    getLink()
  }, [])

  return (
    <div>
      <Navbar />
      <div className='container mt-5'>
        <div className='mt-5 pt-4'>
          <form>
            <div className='d-flex justify-content-center mt-5 mx-5 border-0 bg-light shadow rounded-2'>
              <div className='mx-5 mt-5'>
                <h1 className='mr-5'>Upload Note</h1>

                <br />
                <br />
                <br />
                <button
                  type='submit'
                  id='upload'
                  class='btn btn-secondary btn-lg'
                >
                  Update
                </button>
              </div>
              <div className='mx-5 my-4' style={hr} />
              <div className='mx-5 mt-5'>
                <Box sx={{ display: 'flex-horizontal' }}>
                  <CssBaseline />
                  {comment.map((data) => {
                    return (
                      <>
                        <span class='input-group-text'>{data.studentName}</span>
                        <input
                          type='text'
                          value={data.comment}
                          aria-label='First name'
                          class='form-control'
                        />
                      </>
                    )
                  })}

                  <Box
                    component='main'
                    sx={{ flexGrow: 1, bgcolor: 'white', p: 3 }}
                  ></Box>
                </Box>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
