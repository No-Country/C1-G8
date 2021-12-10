import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
    return (
        <div className="card mt-4 w-50 p-4" >
            <h1>404</h1>
            <h2 className='text-danger'>Page not found</h2>
            <Link to='/board' className='btn btn-dark'>Go Back</Link>
        </div>
    )
}
