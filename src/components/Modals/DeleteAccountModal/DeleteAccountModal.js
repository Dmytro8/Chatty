import React, { useState, useContext } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { ErrorButton } from "../../common/FormControls";
import CancelIcon from "@material-ui/icons/Cancel";
import { TextField } from "@material-ui/core";
import { purple, grey } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";
import classes from "./DeleteAccountModal.module.scss";

const buttonErrorStyle = {
  width: "100%",
  height: "56px",
  textTransform: "none",
  marginTop: "10px",
};
const errorStyle = {
  color: "rgb(244, 67, 54)",
  marginTop: "6px",
  fontSize: "11px",
};
const closeButtonStyle = {
  position: "absolute",
  right: "0",
  top: "0",
  marginTop: "5px",
  marginRight: "5px",
  color: grey[500],
};
export const StyledTextField = withStyles({
  root: {
    width: "100%",
    marginTop: "10px",
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: purple[600],
      },
    },
  },
})(TextField);

export const DeleteAccountModal = ({
  isModalOpen,
  handleClose,
  deleteAccountRequest,
}) => {
  const [inputValue, setInputValue] = useState("");
  const correctInputValue = "DELETE";
  const [isIncorrectValue, setIsIncorrectValue] = useState(false);
  const closeModalHandler = () => {
    handleClose();
    setInputValue("");
    setIsIncorrectValue(false);
  };
  const deleteHandler = () => {
    if (inputValue === correctInputValue) {
      deleteAccountRequest();
    } else setIsIncorrectValue(true);
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={isModalOpen}
      onClose={closeModalHandler}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 100,
      }}
    >
      <Fade in={isModalOpen}>
        <div className={classes.paper}>
          <div>
            <div style={{ display: "grid", gridAutoFlow: "column" }}>
              <h4 style={{ textAlign: "start", width: "90%" }}>
                Are You sure you want to delete Your account?
              </h4>
              <CancelIcon
                style={closeButtonStyle}
                onClick={closeModalHandler}
                className={classes.cancelIcon}
              />
            </div>

            <p style={{ textAlign: "justify" }}>
              Deleting your account will remove all of your information from our
              database. This cannot be undone. To confirm this, type "DELETE".
            </p>
          </div>
          <div>
            <StyledTextField
              id="outlined-basic"
              variant="outlined"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <ErrorButton
              type="submit"
              variant="contained"
              style={buttonErrorStyle}
              onClick={deleteHandler}
            >
              Delete account
            </ErrorButton>
          </div>
          {isIncorrectValue ? (
            <p style={errorStyle}>
              Type "{correctInputValue} to confirm deleting the account
            </p>
          ) : null}
        </div>
      </Fade>
    </Modal>
  );
};
