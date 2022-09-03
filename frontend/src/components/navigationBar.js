
import React from 'react'
import { NavLink as button } from 'react-router-dom'
import {
  Nav,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './navbarElements'

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          

          <button  >
            About
          </button>
          <button to='' >
            Events
          </button>
          <button to='' >
            Annual Report
          </button>
          <button to='' >
            Teams
          </button>
          <button to='' >
            Blogs
          </button>
          <button to='' >
            Sign Up
          </button>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn></NavBtn>
      </Nav>
    </>
  )
}

export default Navbar
