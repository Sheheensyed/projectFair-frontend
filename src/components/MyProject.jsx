import React from 'react'
import AddProject from './AddProject'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Edit from './Edit'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe, faTrash } from '@fortawesome/free-solid-svg-icons'

function MyProject() {
    return (
        <>
            <div className='p-5 shadow'>
                <div className='d-flex justify-content-between align-items-center'>
                    <h1 className='text-success me-5'>My project</h1>
                    <AddProject />
                </div>

                <div className='bg-light mt-3 p-3 rounded d-flex justify-content-between align-items-center'>
                    <h3 className=''>Media player</h3>

                    <div className='d-flex'>
                        <Edit />
                        
                        <FontAwesomeIcon icon={faGithub} className='fa-xl me-4 text-warning' />
                        <FontAwesomeIcon icon={faGlobe} className='fa-xl me-4 text-success' />
                        <FontAwesomeIcon icon={faTrash} className='fa-xl me-4 text-danger' />
                    </div>

                </div>

                <h3 className='text-center text-warning mt-5'>No project added yet</h3>
            </div>
        </>
    )
}

export default MyProject
