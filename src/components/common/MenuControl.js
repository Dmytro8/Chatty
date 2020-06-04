import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { useHttp } from "../../hooks/httpHook";
//material imports
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { purple } from "@material-ui/core/colors";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SettingsIcon from "@material-ui/icons/Settings";
import { withStyles } from "@material-ui/core/styles";
import ChatIcon from "@material-ui/icons/Chat";

//Contants
import { SETTINGS, CHAT } from "../../constants/url";
//Context
import { AuthContext } from "../../context/AuthContext";
//Sockets
import { logoutSocketEmit } from "../../utils/Sockets/emitSockets";
//Modal window
import { LogoutModal } from "../Modals/LogoutModal/LogoutModal";

const StyledMenu = withStyles({
  "@global": {
    ".MuiPopover-root": {
      cursor: "pointer",
    },
    ".MuiListItemIcon-root": {
      minWidth: "40px",
    },
  },
  paper: {
    border: "1px solid #d3d4d5",
    borderRadius: "0",
    width: "180px",
    left: "unset !important",
    right: "0",
    marginRight: "10px",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:hover": {
      backgroundColor: purple[600],
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus({ handleClose, anchorEl }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const auth = useContext(AuthContext);
  const { request } = useHttp();
  let history = useHistory();
  const logoutHandler = async (event) => {
    await request(`/api/user/${auth.userId}`, "PUT", {
      is_active: false,
      last_seen: Date.now(),
    });
    logoutSocketEmit(auth.userId);
    auth.logout();
    history.push("/login");
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const handleMenuLogout = () => {
    setIsModalOpen(true);
    handleClose();
  };
  return (
    <div>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {/* <Link to={CHAT} onClick={handleClose}>
          <StyledMenuItem>
            <ListItemIcon>
              <ChatIcon />
            </ListItemIcon>
            <ListItemText primary="Chat" />
          </StyledMenuItem>
        </Link> */}
        <Link to={SETTINGS} onClick={handleClose}>
          <StyledMenuItem>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </StyledMenuItem>
        </Link>
        <StyledMenuItem onClick={handleMenuLogout}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Log out" />
        </StyledMenuItem>
      </StyledMenu>
      <LogoutModal
        isModalOpen={isModalOpen}
        handleClose={handleModalClose}
        logoutHandler={logoutHandler}
      />
    </div>
  );
}
