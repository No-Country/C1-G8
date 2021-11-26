import React from "react";
import ListCoins from "./ListCoins";

const Board = () => {
  return (
    <div
      style={{
        textAlign: "center",
        position: "absolute",
        left: 0,
        right: 0,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <ListCoins />
    </div>
  );
};

export default Board;
