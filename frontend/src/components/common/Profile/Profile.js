import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../../../context/AuthContext'
import { Navbar } from '../Navbar'
import './profile.css'
import { ProfileCard } from './ProfileCard'

function Profile() {
  const { user } = useContext(AuthContext)
  const userId = user._id

  const deleteProfile = (id) => {
    axios.delete(`api/users/${id}`)
  }
  return (
    <div className='container'>
      <div className='mb-3 '>
        <Navbar />
      </div>

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
                <div className='row'>
                  <div className='col-sm-12'>
                    <Link
                      to={`/updateProfile/${userId}`}
                      className='btn btn-primary px-3'
                    >
                      Update
                    </Link>
                    <button
                      className='btn mx-5 px-3 btn-danger'
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
      <div>
        <Link to='/displayanswers'>

            <button>Student</button>
        </Link>
      </div>
    </div>
  )
}

export default Profile
