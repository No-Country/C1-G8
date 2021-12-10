import Crypto from "./Crypto";
import React from "react";

const ListCoins = ({coins}) => {


  return (
    <>
      <table class="table table-responsive table-dark table-striped">
        <thead>
          <tr>
            <td>#</td>
            <td>Symbol</td>
            <td>Image</td>
            <td>Name</td>
            <td>Price</td>
            <td>24h Change</td>
            <td>View Details</td>
          </tr>
        </thead>
        <tbody>
          {
            coins.map((coin, index) => {
              return (
                <Crypto
                  key={coin.symbol}
                  id={coin.id}
                  num={index + 1}
                  symbol={coin.symbol}
                  image={coin.image}
                  name={coin.name}
                  price={coin.current_price}
                  change={coin.price_change_percentage_24h}
                />
              )
            })
          }
        </tbody>
      </table>
    </>
  
  );
};

export default ListCoins;
