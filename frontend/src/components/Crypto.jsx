import React from "react";

const Crypto = ({ image, symbol, name, price, change }) => {
  return (
    <>
      <tr style={{ backgroundColor: "#DEEEED" }}>
        <td>{symbol.toUpperCase()}</td>
        <td>
          <img src={image} alt={name} style={{ width: "60px" }} />
        </td>
        <td>{name}</td>
        <td>{price}</td>
        <td style={change > 0 ? { color: "green" } : { color: "red" }}>
          {change}
        </td>
      </tr>
    </>
  );
};

export default Crypto;
