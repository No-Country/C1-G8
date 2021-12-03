import React, { useState } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Exchange = () => {
  const [userId, setUserId] = useState("");
  const [cryptoId, setCryptoId] = useState("");
  const [cryptoUnits, setCryptoUnits] = useState("");
  const [coin, setCoin] = useState([]);

  const url = `https://localhost/editwallet/${userId}/${cryptoId}`;
  // "https://localhost/editwallet/:id/:cryptoid"
  const url2 = `https://localhost/cryptobuy/${userId}`;
  // "https://localhost/cryptobuy/:id"

  const handleChangeUser = (event) => {
    setUserId(event.target.value);
  };

  const handleChangeCrypto = (event) => {
    setCryptoId(event.target.value);
  };

  const handleChangeUnits = (event) => {
    setCryptoUnits(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    (async () => {
      const { data } = await axios.get(url);

      if (data.results) {
        setCoin(data.results);
      } else {
        setCoin(data);
      }
    })();
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();

    (async () => {
      const { data } = await axios.get(url2);

      if (data.results) {
        setCoin(data.results);
      } else {
        setCoin(data);
      }
    })();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        edit
        <input
          type="text"
          placeholder="userId"
          onChange={handleChangeUser}
          value={userId}
        />
        <input
          type="text"
          placeholder="cryptoId"
          onChange={handleChangeCrypto}
          value={cryptoId}
        />
        <button>Search</button>
      </form>
      <form
        onSubmit={handleSubmit2}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        buy
        <input
          type="text"
          placeholder="cryptoId"
          onChange={handleChangeCrypto}
          value={cryptoId}
        />
        <input
          type="text"
          placeholder="cryptoUnits"
          onChange={handleChangeUnits}
          value={cryptoUnits}
        />
        <button>Search</button>
      </form>
      <Box component={Paper}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Exchange
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Exchange data, portfolio holding managment
        </Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 450 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Crypto </TableCell>
              <TableCell align="right">Symbol</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coin.map(
              ({ image, symbol, name, current_price, QUANTITY, id }) => (
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
                  <TableCell align="right">{QUANTITY}</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Exchange;
