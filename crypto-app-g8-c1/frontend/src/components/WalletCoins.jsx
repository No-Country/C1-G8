import Crypto from "./Crypto";
import React, { useEffect } from "react";
import { getWalletAction } from "../redux/actions/walletActions";

import { useDispatch, useSelector } from "react-redux";

const WalletCoins = ({ coins, id }) => {
  const wallet = useSelector((state) => state.wallet);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWalletAction(id));
    console.log(id);
  }, []);

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

export default WalletCoins;
