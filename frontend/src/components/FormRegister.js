import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { setUserAction } from '../redux/actions/userActions'
import Swal from "sweetalert2";

export const FormRegister = () => {

    const dispatch = useDispatch()
    const register = useSelector(state => state.user.register)
    const errorRegister = useSelector(state => state.user.errorRegister)
    const waiting = useSelector(state => state.user.waiting)
    const errorServer = useSelector(state => state.user.errorServer)
    const navigate = useNavigate()
    const [dataForm, setDataForm] = useState({
        userName: '',
        email: '',
        password: ''
    })
    const [msg, setMsg] = useState('')
    const [msgError, setMsgError] = useState('')
    const [cls, setCls] = useState('d-none')
    

    const handleOnChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { userName, email, password } = dataForm
        if (!userName || !email || !password) {
            setMsg('You must complete the required fields')
        } else {
            dispatch(setUserAction(userName, email, password))
            setMsg('')
            // if(register){
            //     Swal.fire({
            //         title:'Successful registration!',
            //         text:register && register.msg,
            //         showCancelButton:true,
            //         confirmButtonText:'Go to Login',
            //         cancelButtonText: 'Home'
            //     }).then((result) => {
            //         if (result.isConfirmed) {
            //             navigate('/login')
            //         } else {
            //             navigate('/')
            //         }
            //     })
                
            // }
        }
    }

    const resetForm = () => {
        setDataForm({
            userName: '',
            email: '',
            password: ''
        })
    }

    return (
        <div className='container p-4 m-4'>
            <di style={{ marginBottom: '300px' }}>
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className='mw-100 my-4 mx-auto p-4 border border-dark' style={{ width: '500px' }}>
                    <h1 className='mx-2'>Registration Form</h1>
                    <h5 className='text-warning mx-2 my-3'>*Required</h5>
                    <form onSubmit={handleSubmit} className='p-4'>
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input
                                type="text"
                                name="userName"
                                placeholder="*username"
                                className="form-control m-2"
                                value={dataForm.userName}
                                onChange={handleOnChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="*Email"
                                className="form-control m-2"
                                value={dataForm.email}
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
                                value={dataForm.password}
                                onChange={handleOnChange}
                            />
                        </div>
                        {register && <p className={`text-center text-success`}>Successful registration! Click <Link to='/login'>here</Link> to log in</p>}
                        {msg && <p className={`text-center text-danger`}>* {msg}</p>}
                        {errorServer && <p className={`text-center text-danger`}>* {errorServer.msg}</p>}
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
                </div>
            </di>
        </div>
    )
}
