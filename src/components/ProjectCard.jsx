import React from 'react'
import Card from 'react-bootstrap/Card';
import projectImg from '../assets/projectimg.png'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function ProjectCard(project) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Card style={{ width: '100%' }} className='shadow border-0 mt-5 mt-md-0 mb-3'>
                <Card.Img variant="top" src={projectImg} className='w-100' onClick={handleShow} />
                <Card.Body>
                    <Card.Title className='text-center'>{project.Title}</Card.Title>

                </Card.Body>
            </Card>



            <Modal show={show} onHide={handleClose} centered size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>{project.Title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={projectImg} className='w-100' alt="" />
                            </div>
                            <div className="col-md-6">
                                <h3 className='mt-3 mt-md-0'>Description</h3>
                                <p>{project?.overview}</p>
                                <h3>Technologies</h3>
                                <p>{project?.language}</p>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Link to={project?.github} target='_blank' className='text-info'><FontAwesomeIcon icon={faGithub} className='fa-2x me-3' /></Link>
               <Link to={project?.website} target='_blank' className='text-success'> <FontAwesomeIcon icon={faGlobe}  className='fa-2x'/></Link>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ProjectCard