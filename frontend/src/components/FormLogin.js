import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getUserAction } from '../redux/actions/userActions'

export const FormLogin = () => {

    const dispatch = useDispatch()
    const login = useSelector(state => state.user.login)
    const logged = useSelector(state => state.user.logged)
    const error = useSelector(state => state.user.error)
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const[errorClient,setErrorClient] = useState('')

    const handleOnChange = (e) => {
        e.preventDefault()
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        const { email, password } = formData
        e.preventDefault()
        if(!email || !password){
            setErrorClient('You must complete the required fields')
        }else{
            dispatch(getUserAction(email,password))
        }
    }

    const resetForm = () => {
        setFormData({
            email: '',
            password: ''
        })
    }

    useEffect(()=>{
        logged ? navigate('/') : setErrorClient(error && error.error)
    },[logged,error,navigate])

    return (
        <div className='container p-4 m-4'>
            <di style={{marginBottom:'300px'}}>
                <br/>
                <br/>
                <br />
                <br/>
                <br/>
                <div className='mw-100 my-4 mx-auto p-4 border border-dark' style={{width:'500px'}}>
                    <h1 className='mx-2'>Login form</h1>
                    <h5 className='text-warning mx-2 my-3'>*Required</h5>
                    <form onSubmit={handleSubmit} className='p-4'>
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="*Email"
                                className="form-control m-2"
                                value={formData.email}
                                onChange={handleOnChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="*Password"
                                className="form-control m-2"
                                value={formData.password}
                                onChange={handleOnChange}
                            />
                        </div>

                        {errorClient && <p className={`text-center text-danger`}>*{errorClient}</p>}
                        <div className='d-flex justify-content-center flex-column'>
                            <button type="submit" className="btn btn-primary btn-lg m-2">
                                Login
                            </button>
                            <button
                                className='btn btn-warning btn-lg m-2'
                                onClick={e => {
                                    e.preventDefault()
                                    resetForm()
                                }}
                            >
                                Reset Form
                            </button>
                        </div>
                    </form>
                    {/* <div className={`${cls} p-3`}>
                {add && add.status === 'Success' && <h3 className='text-success'>{add.msg}</h3>}
                {add && add.status === 'Error' && <h3 className='text-danger'>{add.msg}</h3>}
            </div> */}
                </div>
            </di>
        </div>
    )
}
