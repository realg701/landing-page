import { Modal, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { useState } from "react";
import styled from "styled-components";

const LoginModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button onClick={handleOpen}>Login</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h3>Login</h3>
          </Typography>
          <Typography id="modal-modal-description">Usename</Typography>
          <input type="text" />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Password
          </Typography>
          <input type="password" />

          <div>
            <button>
              <LoginIcon />
              Login
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default LoginModal;

const Box = styled.div`
  background-color: rgba(0, 0, 0, 0.61);
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: auto;
  border-radius: 30px;
  box-shadow: 0 3px 5px 2px rgba(0, 0, 0, 0.16),
    0 5px 10px 5px rgba(0, 0, 0, 0.12);

  @media (0 < width < 600px) {
    width: 340px;
  }
  @media (prefers-color-scheme: light) {
    background-color: rgba(255, 255, 255, 0.61);
  }

  h2 {
    margin: 8px;
  }

  input {
    width: auto;
    padding: 8px;
    margin-top: 2px;
    border: 1px solid lightgray;
    border-radius: 8px;
  }

  button {
    margin-top: 16px;
    display: flex;
    gap: 4px;
  }
`;
