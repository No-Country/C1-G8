import React from 'react'
import { useContext } from 'react'
import { DataContext } from "../context/DataProvider";
import { Link, useNavigate } from 'react-router-dom'

export const WalletDetails = ({ id, name, price, image, quantity }) => {

    const value = useContext(DataContext)
    const [user] = value.user
    const navigate = useNavigate()

    const handleOnClick = (e) => {
        e.preventDefault()
        navigate(`/editwallet/${user.id}/${id}/${name}`)
    }
    return (
        <div className="col-12 col-md-6 col-lg-3 p-1 mb-2">
            <div class="card" style={{ height: '450px' }}>
                <div className='d-flex justify-content-center p-3'>
                    <img src={image} class="card-img-top w-75" alt={name} />
                </div>
                <div class="card-body p-3">
                    <h6 class="card-title text-dark ">Name: {name} </h6>
                    <p class="card-title text-dark ">Quantity: {quantity}</p>
                    <p class="card-title text-dark ">Unit price: {price}</p>
                    <p class="card-title text-dark ">Total price: {price * quantity}</p>
                    <Link to={`/coins/${name}`} className="btn btn-success">
                        Details
                    </Link>
                    <input type='button' value='Buy more' className="btn btn-primary mx-1" onClick={handleOnClick} />
                </div>
            </div>
        </div>
    )
}
