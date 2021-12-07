import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCryptoAction } from "../redux/actions/cryptoActions";
import { useParams } from "react-router-dom";

const Crypto = ({
  image,
  symbol,
  name,
  current_price,
  price_change_percentage_24h,
}) => {
  //   const dispatch = useDispatch();
  //   const crypto = useSelector((state) => state.crypto.crypto);
  //   const {id} = useParams ();
    
  // useEffect(() => {
  //   dispatch(getCryptoAction(id));
  // }, [dispatch, id]);
  
  // console.log(crypto)

  return (
    <>
      <tr style={{ backgroundColor: "#DEEEED" }}>
        <td>{symbol}</td>
        <td>
          <img src={image} alt={name} style={{ width: "60px" }} />
        </td>
        <td>{name}</td>
        <td>{current_price.usd}</td>
        <td style={price_change_percentage_24h > 0 ? { color: "green" } : { color: "red" }}>
          {price_change_percentage_24h}
        </td>
      </tr>
    </>
  );
};

export default Crypto;
