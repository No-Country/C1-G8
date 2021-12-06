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

  const [globalUser, setGlobalUser] = useState({});
  // objectID

  const [formData, setFormData] = useState({
    user: "",
    email: "",
    pass: "",
  });

  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("handleLogin");
    console.log(`email: ${mail}`);
    try {
      (async () => {
        const { data } = await axios.post(urlWWW, {
          email: mail,
          password: pass,
        });
        console.log(pass);
        if (data.res) {
          setGlobalUser(data.res);
          console.log(data.res);
          console.log(data);
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
  //set Username with Redux

  const urlWWW = `http://localhost:4000/api/login/`;
  // "https://localhost/login/:id"

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
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <input
                type="text"
                onChange={handleOnChange}
                value={formData.email}
              />
              <input
                type="password"
                onChange={handleOnChange}
                value={formData.pass}
              />
              <button>Login</button>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Login;
