import React from 'react'
import crypto1 from '../image/crypto.jpg'
import crypto2 from '../image/crypto2.jpg'
import crypto3 from '../image/walletcrypto.jpg'

const Home = () => {
    return (
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active cryptoimage">
                    <img src={crypto1} class="d-block w-100 h-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h2 className='text-white' >Crypto list</h2>
                        <h5 className='text-white'>more at 1000 crypto </h5>
                    </div>
                </div>
                <div class="carousel-item cryptoimage">
                    <img src={crypto2} class="d-block w-100 h-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h2 className='text-white' >Acces on the valu of one crypto particulari</h2>
                        <h5 className='text-white'>ou can view the cotization of the crypto coins ta the moment</h5>
                    </div>
                </div>
                <div class="carousel-item cryptoimage">
                    <img src={crypto3} class="d-block w-100 h-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h4 className='text-white' >Coming soon more function for the wallet crypto</h4>
                        <h5 className='text-white'>You can buy and sell your crypto coins trhou the wallet</h5>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Home
