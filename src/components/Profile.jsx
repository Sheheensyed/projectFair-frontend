import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Profile() {
  return (
    <>
      <div className='p-4 shadow mt-4 mt-md-0'>
        <div className='d-flex justify-content-between my-3'>
          <h1 className='text-success'>Profile</h1>
          <button className='btn btn-outline-danger'><FontAwesomeIcon
            icon={faAngleUp} /></button>
        </div>

        <div className='d-flex justify-content-center align-items-center flex-column'>
          <label htmlFor="projectImage" className='d-flex justify-content-center align-items-center flex-column'>
            <input type="file" className='d-none' name="" id="projectImage" />
            <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" className='w-75' alt="" />
          </label>
          <div className="w-100">
            <input type="text" placeholder='Github' className='form-control' name="" id="" />
            <input type="text" placeholder='Linkedin' className='form-control mt-3' name="" id="" />
            <div className='d-flex justify-content-center'>  <button className='btn btn-success mt-4 text-center w-75 rounded'>Update profile</button></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile