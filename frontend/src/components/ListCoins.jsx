
import Crypto from "./Crypto";
import React from "react";

const ListCoins = ({coins}) => {



  return (
    <>
      <div className="row d-flex justify-content-center">
        {
          coins && coins.map(coin=>{
            return(
              <Crypto id={coin.id} image={coin.image} name={coin.name} price={coin.current_price} key={coin.id} />
            )
          })
        }
      </div>
    </>
  
  );
};

export default ListCoins;
