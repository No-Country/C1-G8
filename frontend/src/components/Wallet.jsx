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

const Wallet = () => {
  const [coins, setCoins] = useState([]);

  const [userId, setUserId] = useState("");

  const urlWWW = `https://localhost/cryptoview/${userId}/`;
  // "https://localhost/cryptoview/:id"

  const handleChangeUser = (event) => {
    setUserId(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    (async () => {
      const { data } = await axios.get(urlWWW);

      if (data.results) {
        setCoins(data.results);
      } else {
        setCoins(data);
      }
    })();
  };

  return (
    <>
      <Box component={Paper}>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <input
            type="text"
            placeholder="userId"
            onChange={handleChangeUser}
            value={userId}
          />
          <button>Search</button>
        </form>
      </Box>
      <Box component={Paper}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Wallet
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Wallet data, portfolio holding managment
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
            {coins.map(
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

export default Wallet;