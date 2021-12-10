import Crypto from "./Crypto";
import React from "react";
import walletReducer from "../redux/reducers/walletReducer";

const ListCoins = ({ coins }) => {
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
            <td>Amount</td>
            <td>Total</td>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, index) => {
            return (
              <Crypto
                key={coin.symbol}
                id={coin.id}
                num={index + 1}
                symbol={coin.symbol}
                image={coin.image}
                name={coin.name}
                price={coin.current_price}
                amount={wallet.coins.amount}
                total={wallet.coins.amount * coin.current_price}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ListCoins;
