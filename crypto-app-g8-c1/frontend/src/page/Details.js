import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCryptoAction } from "../redux/actions/cryptoActions";
import { useParams } from "react-router-dom";
import DetailCrypto from "../components/DetailCrypto";
import { Loading } from "../components/Loading";
import { Error } from "../components/Error";

export const Details = () => {
    const dispatch = useDispatch();
    const crypto = useSelector((state) => state.crypto.crypto);
    const currency = useSelector(state => state.crypto.currency)
    const error = useSelector(state=>state.crypto.error)
    const { id } = useParams();

    useEffect(() => {
        dispatch(getCryptoAction(id));
    }, [dispatch, id]);

    return (
        <div className='container content-details'>
            {currency && <Loading />}
            {crypto && <DetailCrypto crypto={crypto} />}
            {error && <Error />}
        </div>
    )
}
