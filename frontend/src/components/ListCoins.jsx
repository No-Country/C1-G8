import React, { useEffect, useState } from "react";
import Crypto from "./Crypto";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ListCoins = () => {
  const [coins, setCoins] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1";
  // https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(url);

      if (data.results) {
        setCoins(data.results);
      } else {
        setCoins(data);
      }
    })();
  }, []);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 450 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Crypto </TableCell>
              <TableCell align="right">Symbol</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">24h Change</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coins.map(
              ({
                image,
                symbol,
                name,
                current_price,
                price_change_percentage_24h,
                id,
              }) => (
                <TableRow
                  key={id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <img src={image} alt={name} style={{ width: "60px" }} />
                  </TableCell>
                  <TableCell align="right">{symbol.toUpperCase()}</TableCell>
                  <TableCell align="right">{name}</TableCell>
                  <TableCell align="right">{current_price}</TableCell>
                  <TableCell align="right">
                    {price_change_percentage_24h}
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <table
        style={{
          textAlign: "center",
          margin: 0,
          position: "absolute",
          left: 100,
          right: 0,
        }}
      >
        <thead>
          <tr>
            <td>Coin</td>
            <td>a</td>
            <td>Name</td>
            <td>Price</td>
            <td>24h Change</td>
          </tr>
        </thead>
        <tbody>
          {coins.map(
            ({
              image,
              symbol,
              name,
              current_price,
              price_change_percentage_24h,
            }) => {
              return (
                <Crypto
                  key={symbol}
                  image={image}
                  symbol={symbol}
                  name={name}
                  price={current_price}
                  change={price_change_percentage_24h}
                />
              );
            }
          )}
        </tbody>
      </table>
    </>
  );
};

export default ListCoins;
