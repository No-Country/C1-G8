import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getCryptoAction } from '../redux/actions/cryptoActions'
import { editCryptoAction } from '../redux/actions/exchangeActions'
import Swal from "sweetalert2";

export const EditForm = () => {

    const { userId, currencyId, currencyName } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const crypto = useSelector(state => state.crypto.crypto)

    const [quantity, setQuantity] = useState(1)

    const handleOnChange = (e) => {
        setQuantity(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(editCryptoAction(userId, currencyId, currencyName, quantity))
        Swal.fire({
            title: 'Successful purchase!',
            text: "See details in my wallet?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Go to my wallet',
            denyButtonText: `See more cryptocurrencies?`,
            cancelButtonText:'Home'
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                navigate('/my-wallet')
            } else if (result.isDenied) {
                navigate('/board')
            }else{
                navigate('/')
            }
        })
    }

    const handleOnClick = (e) => {
        e.preventDefault()
        Swal.fire({
            title: 'Cancel purchase?',
            text: "All data saved so far will be lost!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, I want to cancel the purchase!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Purchase canceled!',
                    'Your purchase has been canceled!',
                    'success'
                )
                navigate(`/board`)
            }
        })
    }
    useEffect(() => {
        dispatch(getCryptoAction(currencyName))
    }, [dispatch])


    return (
        <div className='container p-4 m-4'>
            <di style={{ marginBottom: '300px' }}>
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className='mw-100 my-4 mx-auto p-4 border border-dark' style={{ width: '500px' }}>
                    <h1 className='mx-2'>Purchase form</h1>
                    <form onSubmit={handleSubmit} className='p-4'>
                        <div className="form-group">
                            <label htmlFor="">Quantity</label>
                            <input
                                type="number"
                                name="quantity"
                                placeholder="Quantity"
                                className="form-control m-2"
                                value={quantity}
                                onChange={handleOnChange}
                            />
                        </div>

                        <div>
                            <h3>Your purchase</h3>
                            <h5 >Currency: {crypto && crypto.name}</h5>
                            <h5>Quantity: {quantity}</h5>
                            <h5>Unit Price: {crypto && crypto.market_data.current_price.usd}</h5>
                            <h5>Total Price: {crypto && crypto.market_data.current_price.usd * quantity}</h5>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <input type="submit" className="btn btn-primary mx-2" value='confirm' />
                            <button type="button" className="btn btn-secondary mx-2" onClick={handleOnClick}>Cancel</button>
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
