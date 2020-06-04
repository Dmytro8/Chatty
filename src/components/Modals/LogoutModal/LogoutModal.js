import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Logo } from "../../Logo";
import { AccentButton } from "../../common/FormControls";

import myclasses from "./LogoutModal.module.scss";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "none",
    boxShadow: theme.shadows[5],
    margin: "0 5%",
    padding: theme.spacing(2, 4, 3),
  },
}));

export const LogoutModal = ({ isModalOpen, handleClose, logoutHandler }) => {
  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={isModalOpen}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 100,
      }}
    >
      <Fade in={isModalOpen}>
        <div className={classes.paper}>
          <div className={myclasses.question}>
            <h4>Log out from</h4>
            <div style={{ fontSize: "10px" }}>
              <Logo />
            </div>
            <h4>?</h4>
          </div>
          <div className={myclasses.buttonsWrapperStyle}>
            <button className={myclasses.cancel} onClick={handleClose}>
              Cancel
            </button>
            <AccentButton
              type="submit"
              variant="contained"
              style={{ textTransform: "none" }}
              onClick={logoutHandler}
            >
              Yes, log out
            </AccentButton>
          </div>
        </div>
      </Fade>
    </Modal>
  );
};
