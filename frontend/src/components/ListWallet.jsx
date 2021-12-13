import React from "react";
import { WalletDetails } from "./WalletDetails";


const ListWallet = ({ wallet }) => {

  return (
    <>
      <div className="row d-flex justify-content-center">
        {
          wallet && wallet.map(w => {
            console.log(w)
            return (
              <WalletDetails key={w.name} id={w.id} name={w.name} price={w.price} image={w.image} quantity={w.quantity} />
            )
          })
        }
      </div>
    </>
  );
};

export default ListWallet;


