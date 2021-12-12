import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
    return (
        <div className="card mt-4 mw-100 h-100 p-4 text-center" style={{width:'500px'}} >
            <div className='m-4 p-4'>
                <h1 className='text-dark m-4'>404</h1>
                <h2 className='text-danger m-4'>Page not found</h2>
                <div className='d-flex justify-content-center flex-column flex-md-row p-4 p-md-1'>
                    <Link to='/board' className='btn btn-primary m-1'>Go Back</Link>
                    <Link to='/' className='btn btn-success m-1'>Home</Link>
                </div>
            </div>
        </div>
    )
}
