import  {React, useContext }from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { AuthContext } from '../../../context/AuthContext'

function AdminNav() {
  const { user } = useContext(AuthContext)
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
         {(user.type == 'sAdmin') ? (
              <Container>
              <Navbar.Brand href='#home'>Edumate</Navbar.Brand>
              <Navbar.Toggle aria-controls='responsive-navbar-nav' />
              <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='me-auto'>
                  <Nav.Link href='/admin/home'>Home</Nav.Link>
                  <Nav.Link href='/adduser'>Add User</Nav.Link>
                  <Nav.Link href='/addadmin'>Add Admin</Nav.Link>
                  <NavDropdown title='Details' id='collasible-nav-dropdown'>
                    <NavDropdown.Item href='/viewuser'>User Details</NavDropdown.Item>
                    {/* <NavDropdown.Item href='#action/3.2'>
                      Admin Details
                    </NavDropdown.Item>
                    <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item> */}
                    {/* <NavDropdown.Divider />
                    <NavDropdown.Item href='#action/3.4'>
                      Separated link
                    </NavDropdown.Item> */}
                  </NavDropdown>
                </Nav>
                <Nav>
                  <Nav.Link eventKey={2} href='/logout'>
                    <button className='btn btn-outline-danger btn-sm'>Logout</button>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
              </Container>
      ) : (
        (user.type == 'Admin' ? (
          <Container>
          <Navbar.Brand href='#home'>Edumate</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='/admin/home'>Home</Nav.Link>
              <Nav.Link href='/getsubtime'>Manage Time Tables</Nav.Link>
              <Nav.Link href='/getexam'>Manage Exams</Nav.Link>
              <Nav.Link href='/getsubject'>Manage Subjects</Nav.Link>
              <Nav.Link href='/notereport'>Notes</Nav.Link>
              <NavDropdown title='Details' id='collasible-nav-dropdown'>
                <NavDropdown.Item href='/viewuser'>User Details</NavDropdown.Item>
                {/* <NavDropdown.Item href='#action/3.2'>
                  Admin Details
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item> */}
                {/* <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} href='/logout'>
                <button className='btn btn-outline-danger btn-sm'>Logout</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
        ) : (
          <>
            <p>error</p>
          </>
        ))
      )}
    </Navbar>
  )
}

export default AdminNav


