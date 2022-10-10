import React, { useEffect, useState, useContext, useRef } from 'react'
import axios from 'axios'
import Alert from '@mui/material/Alert'
import { useParams, useNavigate } from 'react-router-dom'
import Navigation from '../../common/Navigation/Navigation'
import { Box } from '@mui/system'
import { CssBaseline, TextField } from '@mui/material'
import { AuthContext } from '../../../context/AuthContext'
import './styless.css'
const drawerWidth = 240

export const ViewComments = () => {
  const hr = {
    borderLeft: '6px solid green',
    height: '590px',
  }

  const [comment, setComment] = useState([])
  const [note, setNote] = useState()
  const items = Array.from(Array(100).keys())

  const params = useParams()

  const itemsRef = useRef()

  const getLink = () => {
    axios.get(`/comment/get/${params.id}`).then((res) => {
      setComment(res.data)
    })
  }

  const getNote = () => {
    axios.get(`/teacherNote/${params.id}`).then((res) => {
      setNote(res.data.note)
      console.log(res.data)
    })
  }
  useEffect(() => {
    getLink()
    getNote()
  }, [])

  return (
    <div>
      <Navigation />
      <div className='container mt-5'>
        <div className='mt-5 pt-4'>
          <form>
            <div className='d-flex justify-content-center mt-5 mx-5 border-0 bg-light shadow rounded-2'>
              <div className='mx-5 mt-5'>
                <h1 className='mr-5'>Uploaded Note</h1>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <input
                  type='text'
                  class='form-control'
                  id='link'
                  name='link'
                  disabled
                  value={note}
                />
                <br />
                <br />
                <br />
              </div>
              <div className='mx-5 my-4' style={hr} />

              <div id='list' className='mx-5 mt-5'>
                <Box sx={{ display: 'flex-horizontal' }}>
                  <CssBaseline />
                  <ul style={{ width: '600px', height: '590px' }}>
                    {comment.map((data, i) => {
                      return (
                        <li ref={itemsRef[i]}>
                          <span class='input-group-text'>
                            {data.studentName}
                          </span>
                          <textarea
                            type='text'
                            value={data.comment}
                            aria-label='First name'
                            class='form-control'
                          />
                          <br />
                        </li>
                      )
                    })}
                  </ul>
                </Box>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
