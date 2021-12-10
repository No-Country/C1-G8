import { Link } from "react-router-dom";
import React from "react";

const Crypto = ({
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
            <Link to={`/coins/${id}`} className="btn btn-success">
              Details
            </Link>
          </td>
        )}
      </tr>
    </>
  );
};

export default Crypto;
