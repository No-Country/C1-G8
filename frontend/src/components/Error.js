import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
    return (
        <div className="card mt-4 w-50 h-100 p-4 text-center" >
            <h1 className='text-dark m-4'>404</h1>
            <h2 className='text-danger m-4'>Page not found</h2>
            <div className='p-4 m-4'>
                <Link to='/board' className='btn btn-primary mx-2'>Go Back</Link>
                <Link to='/' className='btn btn-success mx-2'>Home</Link>
            </div>
        </div>
    )
}
