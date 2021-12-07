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

const Register = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [globalUser, setGlobalUser] = useState({});

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
  };
  //set Username with Redux

  const urlWWW = `https://localhost/create/`;
  // "https://localhost/create"

  const handleLogin = () => {
    (async () => {
      const { data } = await axios.post(urlWWW, {
        userName: formData.user,
        email: formData.mail,
        password: formData.pass,
      });

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
        Register
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component={Paper} sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Register
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form
              onSubmit={handleSubmit}
              style={{
                display: "block",
                justifyContent: "center",
              }}
            >
              <input
                type="text"
                name="user"
                onChange={handleOnChange}
                value={formData.user}
                placeholder="username"
              />
              <input
                name="email"
                type="email"
                onChange={handleOnChange}
                value={formData.email}
                placeholder="email"
              />
              <input
                name="pass"
                type="password"
                onChange={handleOnChange}
                value={formData.pass}
                placeholder="password"
              />
              <button>Set</button>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Register;
