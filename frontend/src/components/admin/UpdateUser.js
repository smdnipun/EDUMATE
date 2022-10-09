import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import AdminNav from '../common/Navigation/AdminNav'
import Swal from 'sweetalert2'

function UpdateUser() {
  const params = useParams()
  const [data, setData] = useState({})
  const [streams, setStreams] = useState([])
  const [firstName, setFname] = useState()
  const [lastName, setLname] = useState()
  const [type, setType] = useState()
  const [stream, setStream] = useState()
  const [email, setEmail] = useState()
  const [dob, setDob] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    loadData()
    loadStream()
  }, [])

  const loadData = () => {
    axios
      .get(`/api/users/${params.id}`)
      .then((res) => {
        setData(res.data)
        setFname(res.data.firstName)
        setLname(res.data.lastName)
        setType(res.data.type)
        setStream(res.data.stream)
        setEmail(res.data.email)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const loadStream = () => {
    axios
      .get('/stream/')
      .then((res) => {
        setStreams(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const setprofileData = () => {
    setFname(data.firstName)
    setLname(data.lastName)
    setType(data.type)
    setStream(data.stream)
    setEmail(data.email)
  }

  const handlesubmit = () => {
    axios
      .put(`/api/users/${params.id}`, {
        firstName: firstName,
        lastName: lastName,
        type: type,
        stream: stream,
        email: email,
      })
      .then((res) => {
        Swal.fire('Congrats!', 'Successfully Added', 'success')
        navigate('/viewuser')
      })
  }

  return (
    <div>
      <AdminNav />
      <div className='container'>
        <div className='main-body my-5'>
          <div className='row gutters-sm mt-5'>
            <div className='card'>
              <div className='card-body'>
                <div className='d-flex justify-content-center pb-3'>
                  <h1>Update User Details</h1>
                </div>
                <div className='row mb-3'>
                  <div className='col-sm-3'>
                    <h6 className='mb-0'>First Name</h6>
                  </div>
                  <div class='col-sm-9 text-seconday'>
                    <input
                      type='text'
                      className='form-control'
                      value={firstName}
                      onChange={(e) => setFname(e.target.value)}
                    />
                  </div>
                </div>
                <div className='row mb-3'>
                  <div className='col-sm-3'>
                    <h6 className='mb-0'>Last Name</h6>
                  </div>
                  <div className='col-sm-9 text-secondary'>
                    <input
                      type='text'
                      className='form-control'
                      value={lastName}
                      onChange={(e) => setLname(e.target.value)}
                    />
                  </div>
                </div>
                <div className='row mb-3'>
                  <div className='col-sm-3'>
                    <h6 className='mb-0'>Role</h6>
                  </div>
                  <div className='col-sm-9 text-secondary'>
                    <select
                      id='type'
                      name='type'
                      className='form-control form-control-md'
                      placeholder='Choose'
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                      required
                    >
                      <option value='Student'>Student</option>
                      <option value='Teacher'>Teacher</option>
                    </select>
                  </div>
                </div>
                <div className='row mb-3'>
                  <div className='col-sm-3'>
                    <h6 className='mb-0'>Stream</h6>
                  </div>
                  <div className='col-sm-9 text-secondary'>
                    <select
                      id='stream'
                      name='stream'
                      className='form-control form-control-md'
                      value={stream}
                      onChange={(e) => setStream(e.target.value)}
                      required
                    >
                      <option value={data.stream}>{data.stream}</option>
                      {streams.map((stream) => {
                        return (
                          <option key={stream._id} value={stream.streamname}>
                            {stream.streamname}
                          </option>
                        )
                      })}
                    </select>
                  </div>
                </div>
                <div className='row mb-3'>
                  <div className='col-sm-3'>
                    <h6 className='mb-0'>Email</h6>
                  </div>
                  <div className='col-sm-9 text-secondary'>
                    <input
                      type='text'
                      className='form-control  form-control-md'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className='row '>
                  <div className='col-sm-4'></div>
                  <div className='col-sm-8 text-secondary d-flex justify-content-end'>
                    <button
                      type='submit'
                      className='btn btn-primary'
                      onClick={handlesubmit}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateUser
