import React, { createContext, useState } from 'react'

export const DataContext = createContext()

export const DataProvider = (props) => {

    const [page, setPage] = useState(1)

    const nextPage = (e) => {
        e.preventDefault()
        setPage(page + 1)
    }

    const prevPage = (e) => {
        e.preventDefault()
        setPage(page <= 1 ? 1 : page - 1)
    }

    const value ={
        page:[page],
        nextPage:nextPage,
        prevPage:prevPage
    }
    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}
