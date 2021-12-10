import { Link } from "react-router-dom";
import React from "react";

const DetailCrypto = ({ crypto }) => {

    return (
        <div className="card mt-4 w-100 w-lg-50 p-2" >
            <h1 className='p-4 text-dark'>{crypto.name}</h1>
            <img src={crypto.image && crypto.image.large} className="card-img-top" alt={crypto.id} />
            <div className="card-body">
                <h5 className="card-title text-dark"> Name: {crypto && crypto.id}</h5>
                <p className="card-text text-dark">Price: ${crypto.market_data && crypto.market_data.current_price.usd}</p>
                <p className='text-dark'>
                    Last variation value in 24hs: 
                    <spam className={crypto.market_data && crypto.market_data.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}>
                       {' '} ${ ' $' + crypto.market_data && crypto.market_data.price_change_percentage_24h }
                    </spam>
                </p>
                <Link to="/board" className="btn btn-primary m-1">Go back</Link>
                <Link to="/" className="btn btn-success m-1">Home</Link>
            </div>
        </div>
    )
}

export default DetailCrypto
