import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function AddProject() {
    const [show, setShow] = useState(false);
    const [preview,setPreview]=useState("")


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
        // console.log(e.target.files);
        setProjectDetails({ ...projectDetails, projectImage: e.target.files[0] })
    }

    useEffect(()=>{
        if(projectDetails.projectImage){
            setPreview(URL.createObjectURL(projectDetails,projectImage))
        }else{

        }
    },(projectDetails.projectImage))

    const handleClose = () => setShow(false);
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
                                    <input type="file" className='d-none' name="" id="projectImage" onChange={(e)=>handleFile(e)} />
                                    <img src={preview? preview:"https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE.jpg"} className='w-100' alt="No image" />
                                </label>
                            </div>
                            <div className="col-md-6">
                                <input type="text" placeholder='Title' className='form-control mt-2 mt-md-0' onChange={(e) => setProjectDetails({ ...projectDetails, title: e.target.value })} />
                                <input type="text" placeholder='Language' className='form-control mt-2' onChange={(e) => setProjectDetails({ ...projectDetails, language: e.target.value })} />
                                <input type="text" placeholder='Github' className='form-control mt-2' onChange={(e) => setProjectDetails({ ...projectDetails, github: e.target.value })} />
                                <input type="text" placeholder='Website' className='form-control mt-2' onChange={(e) => setProjectDetails({ ...projectDetails, website: e.target.value })} />
                                <textarea rows={5} name="" placeholder='Overview' id="" className='w-100 form-control mt-2' onChange={(e) => setProjectDetails({ ...projectDetails, overview: e.target.value })}></textarea>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={handleClose} className='me-3'>
                        Cancel
                    </Button>
                    <Button variant="success" onClick={handleClose}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddProject