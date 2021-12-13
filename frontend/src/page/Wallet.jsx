import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListWallet from "../components/ListWallet";
import { DataContext } from "../context/DataProvider";
import { getWalletAction } from "../redux/actions/walletActions";


const Wallet = () => {
  const dispatch = useDispatch();
  const wallet = useSelector((state) => state.wallet.wallet);
  const error = useSelector((state) => state.wallet.error);
  const currency = useSelector(state => state.wallet.currency)

  const value = useContext(DataContext);
  const [page] = value.page;
  const nextPage = value.nextPage;
  const prevPage = value.prevPage;
  const [user] = value.user
  const [id, setId] = useState('')

  useEffect(() => {
    dispatch(getWalletAction(id));
  }, [dispatch, id]);

  useEffect(() => {
    setId(user && user.id)
  }, [user])

  return (
    <div className="container p-4 mt-4">
      <div className="d-flex justify-content-center p-4 my-4">
        <h2 className="text-center">My Wallet</h2>
      </div>
      {currency && <h3 className="text-center text-success">Please wait while the data loads</h3>}
      { wallet !== 'error' && <ListWallet wallet={wallet} />}
      {!wallet && !currency &&  <h3 className="text-center text-info">Your wallet is empty</h3>}
      {error && <h3 className="text-center text-danger">Oops! data cannot be accessed at this time!</h3>}
    </div>
  );
};

export default Wallet;
