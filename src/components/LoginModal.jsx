import { Modal, Typography } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

const LoginModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    width: 400,
    // bgcolor: "background.paper",
    // border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <button onClick={handleOpen}>Login</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Login
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Usename
          </Typography>
          <input type="text" />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Password
          </Typography>
          <input type="text" />
        </Box>
      </Modal>
    </div>
  );
};

export default LoginModal;

const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  
`;
