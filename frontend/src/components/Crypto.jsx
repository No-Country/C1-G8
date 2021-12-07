import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCryptoAction } from "../redux/actions/cryptoActions";
import { useParams } from "react-router-dom";

const Crypto = () => {
    const Dispatch = useDispatch();
    const crypto = useSelector((state) => state.crypto.crypto);
    const {id} = useParams ();
    
  useEffect(() => {
    Dispatch(getCryptoAction(id));
  }, [Dispatch, id]);
  

  return (
    <>
      <tr style={{ backgroundColor: "#DEEEED" }}>
        <td>{crypto && crypto.symbol}</td>
        <td>
          <img src={crypto.image && crypto.image.large} alt={crypto.id} style={{ width: "60px" }} />
        </td>
        <td>{crypto && crypto.id}</td>
        <td>{crypto.market_data && crypto.market_data.current_price.usd}</td>
        <td style={crypto.market_data && crypto.market_data.price_change_percentage_24h > 0 ? { color: "green" } : { color: "red" }}>
          {crypto.market_data && crypto.market_data.price_change_percentage_24h}
        </td>
      </tr>
    </>
  );
};

export default Crypto;
