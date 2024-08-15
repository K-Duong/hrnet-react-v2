import { Modal, Box } from "@mui/material";
import Button from "../button";

import "./style.css";

function ModalSucessMessage({ handleClose }) {
  return (
    <Modal
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      open={true}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          width: 700,
          backgroundColor: "white",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          rowGap: "10px",
          pt: "20px",
          pb: "20px"
        }}
      >
          <h2 id="modal-title">Congratulation!</h2>
          <p id="modal-description">Employee created!</p>
          <Button
            type={"button"}
            handleClick={handleClose}
            className={"btn-modal"}
          >
            Close
          </Button>
      </Box>
    </Modal>
  );
}
export default ModalSucessMessage;
