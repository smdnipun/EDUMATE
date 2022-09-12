import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../Navbar'
import './profile.css'
import { ProfileCard } from './ProfileCard'

function Profile() {
  // var data = JSON.parse(localStorage.getItem('user'))
  return (
    <div className='container'>
      <div className='mb-3 '>
        <Navbar />
      </div>

      <div className='main-body my-5'>
        <div className='row gutters-sm mt-5'>
          <div className='col-md-4 mb-3'>
            <ProfileCard />
          </div>

          <div className='col-md-8'>
            <div className='card mb-3'>
              <div className='card-body'>
                {/* <h1>username:{data.firstName}</h1> */}
                <div className='row'>
                  <div className='col-sm-3'>
                    <h6 className='mb-0'>Full Name</h6>
                  </div>
                  <div className='col-sm-9 text-secondary'>Nipun</div>
                </div>
                <hr />
                <div className='row'>
                  <div className='col-sm-3'>
                    <h6 className='mb-0'>Last Name</h6>
                  </div>
                  <div className='col-sm-9 text-secondary'>Senarath</div>
                </div>
                <hr />
                <div className='row'>
                  <div className='col-sm-3'>
                    <h6 className='mb-0'>Role</h6>
                  </div>
                  <div className='col-sm-9 text-secondary'>Student</div>
                </div>
                <hr />
                <div className='row'>
                  <div className='col-sm-3'>
                    <h6 className='mb-0'>Stream</h6>
                  </div>
                  <div className='col-sm-9 text-secondary'>Maths</div>
                </div>
                <hr />
                <div className='row'>
                  <div className='col-sm-3'>
                    <h6 className='mb-0'>Email</h6>
                  </div>
                  <div className='col-sm-9 text-secondary'>
                    it20255824@my.sliit.lk
                  </div>
                </div>
                <hr />
                <div className='row'>
                  <div className='col-sm-12'>
                    <Link to='/updateProfile' className='btn btn-primary px-3'>
                      Update
                    </Link>
                    <Link to='' className='btn mx-5 px-3 btn-danger'>
                      Delete
                    </Link>
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

export default Profile
