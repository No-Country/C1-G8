import React , { useEffect, useState , useCallback} from "react";
import axios from 'axios';

export default function Listcoints (){
    const [coints, setCoints] = useState([]);
     const getCoints = useCallback(
        async () => {
            const response = await axios.get(`http://localhost:4000/api/coinslist?vs_currency=usd&order=market_cap_asc&page=1`)
            setCoints(response.data)
        },
         [setCoints],
     )

    useEffect(()=> {
        getCoints()
    },[getCoints])

    return(

        <div>
            {
                coints && coints.map(c=>{
                    console.log(c)
                    return(
                        <p key={c.id}>{c.id}</p>
                    )
                })
            }
        </div>
    )
}