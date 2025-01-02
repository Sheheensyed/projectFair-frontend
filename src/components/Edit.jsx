import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Edit() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>


            <FontAwesomeIcon icon={faPenToSquare} className='fa-xl me-4 text-info' onClick={handleShow} />

            <Modal show={show} onHide={handleClose} centered size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title className='text-success'>Add project details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-6">
                                <label htmlFor="projectImage">
                                    <input type="file" className='d-none' name="" id="projectImage" />
                                    <img src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE.jpg" className='w-100' alt="" />
                                </label>
                            </div>
                            <div className="col-md-6">
                                <input type="text" placeholder='Title' className='form-control mt-2 mt:md-0' />
                                <input type="text" placeholder='Language' className='form-control mt-2' />
                                <input type="text" placeholder='Github' className='form-control mt-2' />
                                <input type="text" placeholder='Website' className='form-control mt-2' />
                                <textarea rows={5} name="" placeholder='Overview' id="" className='w-100 form-control mt-2'></textarea>
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

export default Edit
