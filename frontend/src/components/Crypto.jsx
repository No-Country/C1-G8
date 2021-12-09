import React from "react";
import { Link } from "react-router-dom";

const Crypto = ({
  num,
  id,
  symbol,
  image,
  name,
  price,
  change,
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
        <td style={change > 0 ? { color: "green" } : { color: "red" }}>
          {change}
        </td>
        <td><Link to={`/coins/${id}`} className='btn btn-success'>Details</Link></td>
      </tr>
    </>
  );
};

export default Crypto;
