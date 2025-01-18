import React, { createContext, useState } from 'react'

export const addResponseContext = createContext({})

export const editProjectResponse = createContext({})

function ContextShare({ children }) {
    const [addResponse, setAddResponse] = useState([])
    const [editResponse, setEditResponse] = useState([])

    return (
        <>
            <addResponseContext.Provider value={{ addResponse, setAddResponse }}>
                <editProjectResponse.Provider value={{ editResponse, setEditResponse }}>
                    {children}
                </editProjectResponse.Provider>
            </addResponseContext.Provider>

        </>
    )
}

export default ContextShare
