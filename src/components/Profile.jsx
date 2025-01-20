import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { serverUrl } from '../service/serviceUrl'
import { toast } from 'react-toastify'
import { Collapse, ToastContainer } from 'react-bootstrap'
import { updateUserProfileApi } from '../service/allApi'
import "react-toastify/dist/ReactToastify.css";


function Profile() {
  const [open, setOpen] = useState(false);
  const [updateStatus, setUpdateStatus] = useState({})
  const [preview, setPreview] = useState('')
  const [existingImage, setExistingImage] = useState("")
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
    profile: "",
    linkedin: "",
    github: ""
  })
  console.log(userDetails);

  const handleFile = (e) => {
    setUserDetails({ ...userDetails, profile: e.target.files[0] })
  }

  useEffect(() => {
    if (userDetails.profile) {
      setPreview(URL.createObjectURL(userDetails.profile))
    }
  }, [userDetails.profile])
  console.log(preview);

  useEffect(() => {
    if (sessionStorage.getItem("existingUsers")) {
      const user = JSON.parse(sessionStorage.getItem("existingUsers"))
      console.log(user);
      setUserDetails({ ...userDetails, username: user.username, email: user.email, password: user.password, github: user.github, linkedin: user.linkedin })
      setExistingImage(user.profile)

    }
  }, [updateStatus])

  const handleUpdate = async () => {
    const { username, email, password, profile, github, linkedin } = userDetails
    if (!github || !linkedin) {
      toast.info(`Fill the from completely`)
    } else {
      //api
      const reqBody = new FormData()
      reqBody.append("username", username)
      reqBody.append("email", email)
      reqBody.append("password", password)
      reqBody.append("github", github)
      reqBody.append("linkedin", linkedin) ?
        reqBody.append("profile", profile) :
        reqBody.append("profile", existingImage)
      if (preview) {
        const token = sessionStorage.getItem('token')
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
        const result = await updateUserProfileApi(reqBody, reqHeader)
        console.log(result);
        if (result.status == 200) {
          setUpdateStatus(result)
          toast.success(`Profile updated successfully`)
          sessionStorage.setItem('existingUser', JSON.stringify(result.data))
        } else {
          toast.error('Something went wrong')
        }

      } else {
        const reqHeader = {
          "Content-Type": "multipart/json",
          "Authorization": `Bearer ${token}`
        }
        const result = await updateUserProfileApi(reqBody, reqHeader)
        console.log(result);
        if (result.status == 200) {
          toast.success(`Profile updated successfully`)
          sessionStorage.setItem('existingUser', JSON.stringify(result.data))
        } else {
          toast.error('Something went wrong')
        }
      }
    }

  }
  return (
    <>
      <div className='p-4 shadow mt-4 mt-md-0' onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)}>
        <div className='d-flex justify-content-between my-3'>
          <h1 className='text-success'>Profile</h1>

            <button  onClick={() => setOpen(!open)} className='btn btn-outline-danger'>
              
              {open? <FontAwesomeIcon
              icon={faAngleUp} />
              :
              <FontAwesomeIcon
              icon={faAngleDown} />}
              
            </button>
        </div>

       <Collapse in={open}>
         <div>
            <div className='d-flex justify-content-center align-items-center flex-column'>
              <label htmlFor='projectImage' className='d-flex justify-content-center align-items-center flex-column'>
                <input onChange={(e) => handleFile(e)} type="file" className='d-none' name="" id="projectImage" />
    
                {existingImage == "" ?
                 <img src={preview ? preview : "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="} style={{ width: "200px", height: "200px", borderRadius: "50%", marginBottom: '10px' }} alt="" />
                  :
                  <img src={preview ? preview : `${serverUrl}/upload/${existingImage}`} style={{ width: "200px", height: "200px", borderRadius: '50%', marginBottom: "10px" }} alt="" />}
    
              </label>
              <div className="w-100">
                <input type="text" placeholder='Github' onChange={(e) => { setUserDetails({ ...userDetails, github: e.target.value }) }} value={userDetails?.github} className='form-control' name="" id="" />
                <input type="text" placeholder='Linkedin' onChange={(e) => { setUserDetails({ ...userDetails, linkedin: e.target.value }) }} value={userDetails?.linkedin} className='form-control mt-3' name="" id="" />
                <div className='d-flex justify-content-center'>
                  <button onClick={handleUpdate} className='btn btn-success mt-4 text-center w-75 rounded'>Update profile</button></div>
              </div>
            </div>
         </div>
       </Collapse>
      </div>
      <ToastContainer s={true} position='top-center' theme="dark" />
    </>
  )
}

export default Profile