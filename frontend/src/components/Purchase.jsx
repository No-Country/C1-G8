import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { addNewCryptoAction } from "../redux/actions/exchangeActions";

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

const Purchase = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const token = useSelector((state) => state.login.token);
  const token = 123;
  // const userId = useSelector((state) => state.login.id);
  const userId = 1234;

  const [formData, setFormData] = useState({
    coinName: "",
    coinAmount: "",
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

    dispatch(addNewCryptoAction(userId, formData, token));
    console.log(userId);
    console.log(formData);
    console.log(token);

    handleClose();
  };

  return (
    <div>
      <Button
        class="btn btn-outline-success"
        component={Paper}
        onClick={handleOpen}
      >
        Buy!
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component={Paper} sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Buy Coin
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form
              onSubmit={handleSubmit}
              style={{
                display: "block",
                justifyContent: "center",
              }}
            >
              <div>
                <input
                  class="form-control me-2"
                  name="coinName"
                  type="text"
                  onChange={handleOnChange}
                  value={formData.coinName}
                  placeholder="coin-name"
                />
                <input
                  class="form-control me-2"
                  name="coinAmount"
                  type="text"
                  onChange={handleOnChange}
                  value={formData.coinAmount}
                  placeholder="coin-amount"
                />
              </div>
              <div>
                <button class="btn btn-outline-success" type="submit">
                  Purchase
                </button>
              </div>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Purchase;
