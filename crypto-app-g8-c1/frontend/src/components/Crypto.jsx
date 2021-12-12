import { Link } from "react-router-dom";
import React from "react";

const Crypto = ({
  id,
  image,
  name,
  price,
}) => {
  return (
    // <>
    //   <tr style={{ backgroundColor: "#DEEEED" }}>
    //     <td>{num}</td>
    //     <td>{symbol}</td>
    //     <td>
    //       <img src={image} alt={name} style={{ width: "60px" }} />
    //     </td>
    //     <td>{name}</td>
    //     <td>{price}</td>
    //     {amount && <td>{amount}</td>}
    //     {change && (
    //       <td style={change > 0 ? { color: "green" } : { color: "red" }}>
    //         {change}
    //       </td>
    //     )}
    //     {amount && <td>{amount}</td>}
    //     {amount && <td>{total}</td>}

    //     {!amount && (
    //       <td>
    //         <Link to={`/coins/${id}`} className="btn btn-success">
    //           Details
    //         </Link>
    //       </td>
    //     )}
    //   </tr>
    // </>
    <div className="col-12 col-md-6 col-lg-3 p-1 mb-2">
      <div class="card" style={{height:'500px'}}>
        <img src={image} class="card-img-top" alt={name} />
        <div class="card-body">
          <h3 class="card-title text-dark ">Name: {id} </h3>
          <h5 class="card-title text-dark ">Price: {price}</h5>
          <Link to={`/coins/${id}`} className="btn btn-success">
              Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Crypto;
