import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <>
      <Navbar className="bg-success d-flex align-items-center" fixed='top'>
        <Container>
          <Navbar.Brand>
            <Link to={'/'} style={{ textDecoration: 'none' }}><span className='text-white mt-4'><FontAwesomeIcon icon={faStackOverflow} className='fs-3' /> Project Fair</span></Link>
          </Navbar.Brand>
        </Container>

        <button className='btn btn-warning rounded ms-auto me-3'><FontAwesomeIcon icon={faPowerOff} className='me-2' /> Logout</button>
      </Navbar>
    </>
  )
}

export default Header