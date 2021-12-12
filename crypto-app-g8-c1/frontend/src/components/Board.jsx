import React from "react";
import ListCoins from "./ListCoins";
import Search from "./Search";

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
      <Search />
      <ListCoins />
    </div>
  );
};

export default Board;
