import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { DataContext } from "../context/DataProvider";
import ListCoins from "../components/ListCoins";
import { Pagination } from "../components/Pagination";
import Search from "../components/Search";
import { getCoinsAction } from "../redux/actions/coinsActions";

const Board = () => {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.coins.coins);
  const currency = useSelector(state=>state.coins.currency)
  const error = useSelector(state=>state.coins.error)
  const value = useContext(DataContext);
  const [page] = value.page;
  const nextPage = value.nextPage;
  const prevPage = value.prevPage;

  useEffect(() => {
    dispatch(getCoinsAction(page));
  }, [dispatch, page]);

  console.log(page);
  return (
    <div className="container p-4 mt-4 d-flex justify-content-center flex-column">
      <div className="d-flex justify-content-center p-4 my-4">
        <h2 className="text-center">Board List of crypto currencies</h2>
      </div>
      {currency && <h3 className="text-center text-success">Please wait while the data loads</h3>}
      {coins && <ListCoins coins={coins} />}
      {coins && <Pagination page={page} nextPage={nextPage} prevPage={prevPage} />}
      {error && <h3 className="text-center text-danger">Oops! data cannot be accessed at this time!</h3>}
    </div>
  );
};

export default Board;
