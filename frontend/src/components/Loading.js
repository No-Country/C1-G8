import React from 'react'

export const Loading = () => {
    return (
        <div className='card mt-4 w-50'>
            <div className="top-row background-top-row">
                <h2 className = 'text-subccess'> Loading ...</h2>
            </div>
            <div className='content-loading'>
                <div className='loading'></div>
            </div>
        </div>
    )
}
