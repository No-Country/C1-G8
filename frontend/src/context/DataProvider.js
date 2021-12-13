import React, { createContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export const DataContext = createContext()

export const DataProvider = (props) => {

    const login = useSelector(state=>state.user.login)
    const [page, setPage] = useState(1)
    const [user,setUser] = useState({})

    console.log(login)
    const nextPage = (e) => {
        e.preventDefault()
        setPage(page + 1)
    }

    const prevPage = (e) => {
        e.preventDefault()
        setPage(page <= 1 ? 1 : page - 1)
    }

    
    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem('data'))
        console.log(data)
        data && data.token ? setUser(data) : login && login.token ? setUser(login) : setUser(user)
    },[login])

    useEffect(()=>{
       localStorage.setItem('data', JSON.stringify(user))
    },[user])

    console.log(user)

    const value ={
        page:[page],
        nextPage:nextPage,
        prevPage:prevPage,
        user:[user,setUser]
    }

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}
