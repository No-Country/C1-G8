import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
// Redux
import { useDispatch } from "react-redux";
import { logoutAction } from "../redux/actions/userActions";

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

const Logout = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutAction());
    handleClose();
  };

  return (
    <div>
      <Button component={Paper} onClick={handleOpen}>
        Logout
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component={Paper} sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            You want to close your session?
          </Typography>
          <Typography id="modal-modal-description" variant="h6" component="h2">
            <Button component={Paper} onClick={handleLogout}>
              Logout
            </Button>
            <Button component={Paper} onClick={handleClose}>
              Cancel
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Logout;
