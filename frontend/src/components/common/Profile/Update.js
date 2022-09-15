import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthContext'
import { Navbar } from '../Navbar'
import { ProfileCard } from './ProfileCard'

function Update() {
  const [id, setId] = useState()
  const [firstName, setFname] = useState()
  const [lastName, setLname] = useState()
  const [type, setType] = useState()
  const [stream, setStream] = useState()
  const [dob, setDob] = useState()
  const [data, setData] = useState([])

  const params = useParams()
  console.log(params)

  useEffect(() => {
    axios
      .get(`/api/users/${params.id}`)
      .then((res) => {
        setFname(res.data.firstName)
        setLname(res.data.lastName)
        setType(res.data.type)
        setStream(res.data.stream)
      })
      .catch((err) => {
        console.log(err)
      })
  })

  const loadData = async () => {
    axios
      .get('/stream/')
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    loadData()
  }, [])

  const handlesubmit = () => {
    const obj = {}

    axios.put(`api/users/${id}`)
  }

  return (
    <div className='container'>
      <div className='mb-3'>
        <Navbar />
      </div>

      <div className='main-body my-5'>
        <div className='row gutters-sm mt-5'>
          <div className='my-2' style={{ marginLeft: '30%', width: '40%' }}>
            <ProfileCard />
          </div>

          <div class='card'>
            <div class='card-body'>
              <div class='row mb-3'>
                <div class='col-sm-3'>
                  <h6 class='mb-0'>First Name</h6>
                </div>
                <div class='col-sm-9 text-seconday'>
                  <input
                    type='text'
                    class='form-control'
                    value={firstName}
                    onChange={(e) => setFname(e.target.value)}
                  />
                </div>
              </div>
              <div class='row mb-3'>
                <div class='col-sm-3'>
                  <h6 class='mb-0'>Last Name</h6>
                </div>
                <div class='col-sm-9 text-secondary'>
                  <input
                    type='text'
                    class='form-control'
                    value={lastName}
                    onChange={(e) => setLname(e.target.value)}
                  />
                </div>
              </div>
              <div class='row mb-3'>
                <div class='col-sm-3'>
                  <h6 class='mb-0'>Email</h6>
                </div>
                <div class='col-sm-9 text-secondary'>
                  <input
                    type='text'
                    class='form-control'
                    value='it20255824@my.sliit.lk'
                  />
                </div>
              </div>
              <div class='row mb-3'>
                <div class='col-sm-3'>
                  <h6 class='mb-0'>Role</h6>
                </div>
                <div class='col-sm-9 text-secondary'>
                  <input
                    type='text'
                    class='form-control'
                    value='it20255824@my.sliit.lk'
                  />
                </div>
              </div>
              <div class='row mb-3'>
                <div class='col-sm-3'>
                  <h6 class='mb-0'>Stream</h6>
                </div>
                <div class='col-sm-9 text-secondary'>
                  <select
                    id='stream'
                    name='stream'
                    className='form-control'
                    value={stream}
                    onChange={(e) => setStream(e.target.value)}
                    required
                  >
                    {data.map((stream) => {
                      return (
                        <option key={stream._id} value={stream.streamname}>
                          {stream.streamname}
                        </option>
                      )
                    })}
                  </select>
                </div>
              </div>
              <div class='row '>
                <div class='col-sm-4'></div>
                <div class='col-sm-8 text-secondary'>
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
  )
}

export default Update
