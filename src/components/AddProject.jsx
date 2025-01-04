import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { addProjectApi } from '../service/allApi';

function AddProject() {
    const [show, setShow] = useState(false);
    const [preview, setPreview] = useState("")
    const [token, setToken] = useState('')
    console.log(token);
    const [key, setkey] = useState(1)


    const [projectDetails, setProjectDetails] = useState({
        title: "",
        language: "",
        github: "",
        website: "",
        overview: "",
        projectImage: ""
    })
    console.log(projectDetails);

    const handleFile = (e) => {
        console.log(e.target.files[0]);
        setProjectDetails({ ...projectDetails, projectImage: e.target.files[0] })
    }

    useEffect(() => {
        if (projectDetails.projectImage) {
            setPreview(URL.createObjectURL(projectDetails.projectImage))
        }
    }, [projectDetails.projectImage])

    const handleCancel = () => {
        setProjectDetails({
            title: "",
            language: "",
            github: "",
            website: "",
            overview: "",
            projectImage: ""
        })
        setPreview("")
        if (key == 1) {
            setkey(0)
        } else {
            setkey(1)
        }
    }




    const handleClose = () => {
        setShow(false)
        handleCancel()
    }

    const handleAdd = async () => {
        const { title, language, github, website, overview, projectImage } = projectDetails
        if (!title || !language || !github || !website || !overview || !projectImage) {
            toast.info('fill the form completely')
        } else {
            //append() - to create reqHeader
            //if the request contains upload content the request body should be created with the healp of append method(), present in the form-data class. inshort reBody should be a form data

            const reqBody = new FormData()
            reqBody.append('title', title)
            reqBody.append('language', language)
            reqBody.append('github', github)
            reqBody.append('website', website)
            reqBody.append('overview', overview)
            reqBody.append('projectImage', projectImage)

            if (token) {
                const reqHeader = {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer${token}`
                }
                const result = await addProjectApi(reqBody, reqHeader)
                console.log(result);
            } else {
                toast.warning('Please login')
            }

        }
    }

    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            setToken(sessionStorage.getItem('token'))
        }
    }, [])

    const handleShow = () => setShow(true);
    return (
        <>
            <button onClick={handleShow} className='btn btn-outline-success'> Add project</button>


            <Modal show={show} onHide={handleClose} centered size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title className='text-success'>Add project details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-6">
                                <label htmlFor="projectImage">
                                    <input type="file" key={key} className='d-none' name="" id="projectImage" onChange={(e) => handleFile(e)} />
                                    <img src={preview ? preview : "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE.jpg"} className='w-100' alt="No image" />
                                </label>
                            </div>
                            <div className="col-md-6">
                                <input type="text" value={projectDetails.title} placeholder='Title' className='form-control mt-2 mt-md-0' onChange={(e) => setProjectDetails({ ...projectDetails, title: e.target.value })} />
                                <input type="text" value={projectDetails.language} placeholder='Language' className='form-control mt-2' onChange={(e) => setProjectDetails({ ...projectDetails, language: e.target.value })} />
                                <input type="text" value={projectDetails.github} placeholder='Github' className='form-control mt-2' onChange={(e) => setProjectDetails({ ...projectDetails, github: e.target.value })} />
                                <input type="text" value={projectDetails.website} placeholder='Website' className='form-control mt-2' onChange={(e) => setProjectDetails({ ...projectDetails, website: e.target.value })} />
                                <textarea rows={5} name="" value={projectDetails.overview} placeholder='Overview' id="" className='w-100 form-control mt-2' onChange={(e) => setProjectDetails({ ...projectDetails, overview: e.target.value })}></textarea>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={handleCancel} className='me-3'>
                        Cancel
                    </Button>
                    <Button variant="success" onClick={handleAdd}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddProject