import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../../../context/AuthContext'
import './profile.css'
import { ProfileCard } from './ProfileCard'
import Navigation from '../Navigation/Navigation'
import Swal from 'sweetalert2'

function Profile() {
  const { user } = useContext(AuthContext)
  const userId = user._id
  const navigate = useNavigate()

  const deleteProfile = async (id) => {
    await axios.delete(`/api/users/${id}`).then((res) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your account has been deleted',
        showConfirmButton: false,
        timer: 1500,
      })
      navigate('/login')
    })
  }
  return (
    <div>
      <Navigation />
      <div className='container'>
        <div className='main-body my-5'>
          <div className='row gutters-sm mt-5'>
            <div className='col-md-4 mb-3'>
              <ProfileCard params={user} />
            </div>

            <div className='col-md-8'>
              <div className='card mb-3'>
                <div className='card-body'>
                  {/* <h1>username:{data.firstName}</h1> */}
                  <div className='row'>
                    <div className='col-sm-3'>
                      <h6 className='mb-0'>Full Name</h6>
                    </div>
                    <div className='col-sm-9 text-secondary'>
                      {user.firstName} {user.lastName}
                    </div>
                  </div>
                  <hr />
                  <div className='row'>
                    <div className='col-sm-3'>
                      <h6 className='mb-0'>Date Of Birth</h6>
                    </div>
                    <div className='col-sm-9 text-secondary'>
                      {user.dateOfBirth}
                    </div>
                  </div>
                  <hr />
                  <div className='row'>
                    <div className='col-sm-3'>
                      <h6 className='mb-0'>Role</h6>
                    </div>
                    <div className='col-sm-9 text-secondary'>{user.type}</div>
                  </div>
                  <hr />
                  <div className='row'>
                    <div className='col-sm-3'>
                      <h6 className='mb-0'>Stream</h6>
                    </div>
                    <div className='col-sm-9 text-secondary'>{user.stream}</div>
                  </div>
                  <hr />
                  <div className='row'>
                    <div className='col-sm-3'>
                      <h6 className='mb-0'>Email</h6>
                    </div>
                    <div className='col-sm-9 text-secondary'>{user.email}</div>
                  </div>
                  <hr />
                  <div className='d-flex justify-content-end'>
                    <div className='col-sm-12'>
                      <Link
                        to={`/updateProfile/${userId}`}
                        className='btn btn-primary px-3'
                      >
                        Update
                      </Link>
                      <Link
                        to={`/forgetPwd/${userId}`}
                        className='btn btn-primary px-3 mx-5'
                      >
                        Update Password
                      </Link>
                      <button
                        className='btn px-3 btn-danger'
                        onClick={() => {
                          deleteProfile(userId)
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Link to='/displayanswers'>

            <button>Student</button>
        </Link>
      </div>
    </div>
  )
}

export default Profile
