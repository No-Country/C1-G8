import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListCoins from "../components/ListCoins";
import { Pagination } from "../components/Pagination";
import Search from "../components/Search";
import { DataContext } from "../context/DataProvider";
import { getCoinsAction } from "../redux/actions/coinsActions";

const Board = () => {

  const dispatch = useDispatch();
  const coins = useSelector((state) => state.coins.coins);
  const value = useContext(DataContext)
  const [page] = value.page
  const nextPage = value.nextPage
  const prevPage = value.prevPage

  useEffect(() => {
    dispatch(getCoinsAction(page));
  }, [dispatch, page]);

  return (
    <div className='container p-4 mt-4'>
      <div className='d-flex justify-content-center p-4 my-4'>
        <h2 className="text-center">List of crypto currencies</h2>
      </div>
      <Search />
      <ListCoins coins={coins} />
      <Pagination page={page} nextPage={nextPage} prevPage={prevPage} />
    </div>
  );
};

export default Board;
