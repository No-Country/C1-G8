import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Login = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [inputUser, setInputUser] = useState("");
  const [username, setUsername] = useState("");
  const [inputPass, setInputPass] = useState("");
  const [pass, setPass] = useState("");
  const [globalUser, setGlobalUser] = useState({});

  const handleChangeUser = (event) => {
    setInputUser(event.target.value);
  };

  const handleChangePass = (event) => {
    setInputPass(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsername(inputUser);
  };
  //set Username with Redux

  const urlWWW = `https://localhost/login/${username}/`;
  // "https://localhost/cryptoview/:id"

  const handleLogin = () => {
    (async () => {
      const { data } = await axios.post(urlWWW);

      if (data.results) {
        setGlobalUser(data.results);
      } else {
        setGlobalUser(data);
      }
    })();

    handleClose();
  };

  //connect get consume fetch Username from Store

  return (
    <div>
      <Button component={Paper} onClick={handleOpen}>
        Login
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component={Paper} sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Login
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div>
              Username: {username}
              <Button component={Paper} onClick={handleLogin}>
                Login
              </Button>
            </div>
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <input
                type="text"
                onChange={handleChangeUser}
                value={inputUser}
              />
              <input
                type="password"
                onChange={handleChangePass}
                value={inputPass}
              />
              <button>Set</button>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Login;
