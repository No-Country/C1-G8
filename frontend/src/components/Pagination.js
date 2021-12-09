import React from 'react'

export const Pagination = ({ page, nextPage, prevPage }) => {
    return (
        <div>
            <div className='d-flex justify-content-center mt-4'>
                {
                    page > 1 ?
                        <button className='btn btn-success m-2' onClick={prevPage}>Prev</button>
                        :
                        <button className='btn btn-success m-2' disabled >Prev</button>
                }
                <button className='btn btn-success m-2' onClick={nextPage}>Next</button>
            </div>
        </div>
    )
}
