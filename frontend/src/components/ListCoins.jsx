import React, { useEffect, useState } from "react";
import Crypto from "./Crypto";
import axios from "axios";

const ListCoins = () => {
  const [coins, setCoins] = useState([]);

  const url =
    "http://localhost:4000/api/coinslist?vs_currency=usd&order=market_cap_desc&per_page=10&page=1";
  // https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(url);

      if (data.results) {
        setCoins(data.results);
      } else {
        setCoins(data);
      }
    })();
  }, []);

  return (
    <>
      <table
        style={{
          textAlign: "center",
          margin: 0,
          position: "absolute",
          left: 100,
          right: 0,
        }}
      >
        <thead>
          <tr>
            <td>Coin</td>
            <td>a</td>
            <td>Name</td>
            <td>Price</td>
            <td>24h Change</td>
          </tr>
        </thead>
        <tbody>
          {coins.map(
            ({
              image,
              symbol,
              name,
              current_price,
              price_change_percentage_24h,
            }) => {
              return (
                <Crypto
                  key={symbol}
                  image={image}
                  symbol={symbol}
                  name={name}
                  price={current_price}
                  change={price_change_percentage_24h}
                />
              );
            }
          )}
        </tbody>
      </table>
    </>
  );
};

export default ListCoins;
