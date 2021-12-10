import { Link } from "react-router-dom";
import React from "react";
import Purchase from "./Purchase";

const CryptoExchange = ({
  num,
  id,
  symbol,
  image,
  name,
  price,
  change,
  amount,
  total,
}) => {
  return (
    <>
      <tr style={{ backgroundColor: "#DEEEED" }}>
        <td>{num}</td>
        <td>{symbol}</td>
        <td>
          <img src={image} alt={name} style={{ width: "60px" }} />
        </td>
        <td>{name}</td>
        <td>{price}</td>
        {amount && <td>{amount}</td>}
        {change && (
          <td style={change > 0 ? { color: "green" } : { color: "red" }}>
            {change}
          </td>
        )}
        {amount && <td>{amount}</td>}
        {amount && <td>{total}</td>}

        {!amount && (
          <td>
            <Purchase />
          </td>
        )}
      </tr>
    </>
  );
};

export default CryptoExchange;
