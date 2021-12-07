import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
// Redux
import { useDispatch } from "react-redux";
import { getUserAction } from "../redux/actions/userActions";

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

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(getUserAction(formData));

    handleClose();
  };
  //set Username with Redux

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
                name="email"
                type="text"
                onChange={handleOnChange}
                value={formData.email}
              />
              <input
                name="password"
                type="password"
                onChange={handleOnChange}
                value={formData.password}
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
