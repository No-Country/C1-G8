import { Link, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import { useDispatch, useSelector } from 'react-redux'
import { getWalletAction } from '../redux/actions/walletActions'
import Swal from "sweetalert2";


const Crypto = ({
  id,
  image,
  name,
  price,
}) => {

  const dispatch = useDispatch()
  const wallet = useSelector((state) => state.wallet.wallet);
  const navigate = useNavigate()
  const value = useContext(DataContext)
  const [user] = value.user

  const handleOnClick = (e) => {
    e.preventDefault()
    dispatch(getWalletAction(user.id))
    const results = wallet && wallet.find(w => w.name === id)
    if (!results) {
      navigate(`/buy/${user.id}/${id}`)
    } else {
      Swal.fire({
        title: 'Are you sure of making the purchase?',
        text: "You already have this crypto currency in your wallet!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, I want to buy!'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate(`/editwallet/${user.id}/${results.id}/${results.name}`)
        } else {
          Swal.fire(
            'Purchase canceled!',
            'Your purchase has been canceled!',
            'success'
          )
        }
      })
    }
  }


  return (
    <div className="col-12 col-md-6 col-lg-3 p-1 mb-2">
      <div class="card" style={{ height: '400px' }}>
        <div className='d-flex justify-content-center p-3'>
          <img src={image} class="card-img-top w-75" alt={name} />
        </div>
        <div class="card-body">
          <h5 class="card-title text-dark ">Name: {name} </h5>
          <h5 class="card-title text-dark ">Price: {price}</h5>
          <Link to={`/coins/${id}`} className="btn btn-success mx-1">
            Details
          </Link>
          {
            user && user.id && <input type='button' value='Buy' className="btn btn-primary mx-1" onClick={handleOnClick} />
          }
        </div>
      </div>

    </div>
  );
};

export default Crypto;
