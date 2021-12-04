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

  const [inputMail, setInputMail] = useState("");
  const [mail, setMail] = useState("");
  const [inputPass, setInputPass] = useState("");
  const [pass, setPass] = useState("");
  const [globalUser, setGlobalUser] = useState({});

  const handleChangeMail = (event) => {
    setInputMail(event.target.value);
  };

  const handleChangePass = (event) => {
    setInputPass(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setMail(inputMail);
  };
  //set Username with Redux

  const urlWWW = `http://localhost:4000/api/login/`;
  // "https://localhost/cryptoview/:id"

  const handleLogin = () => {
    console.log("handleLogin");
    console.log(`email: ${mail}`);
    try {
      (async () => {
        const { data } = await axios.post(urlWWW, {
          email: mail,
          password: pass,
        })
        console.log(pass)
        if (data.res) {
          setGlobalUser(data.res);
          console.log(data.res);
        } else {
          setGlobalUser(data);
          console.log(data);
        }
      })();
    } catch (err) {
      console.log(err);
    }

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
              E-Mail: {mail}
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
                onChange={handleChangeMail}
                value={inputMail}
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
