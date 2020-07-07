import React, { useContext, useState } from "react";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";

import classes from "./DesktopNavbar.module.scss";
import { Logo } from "../../Logo";
import { ProfileAvatar } from "../../ProfileAvatar/ProfileAvatar";
import { ProfileContext } from "../../../contexts/ProfileContext";

import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import CustomizedMenus from "../../common/MenuControl";
import { MAIN } from "../../../constants/url";
import { Link } from "react-router-dom";

export const DesktopNavbar = () => {
  const { profile } = useContext(ProfileContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIsMenuOpened(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setIsMenuOpened(false);
  };
  return (
    <header className={classes.header}>
      <div className={classes.logoWrapper}>
        <Link to={MAIN}>
          <Logo />
        </Link>
      </div>
      <div className={classes.rightSide}>
        <div className={classes.notificationIcon}>
          <NotificationsNoneIcon />
        </div>
        <div className={classes.avatarWrapper}>
          <ProfileAvatar />
        </div>
        <div
          aria-controls="customized-menu"
          aria-haspopup="true"
          onClick={handleClick}
          className={classes.menuButton}
        >
          <div className={classes.profileData}>
            <h4>
              {profile.name} {profile.surname}
            </h4>
          </div>
          <ArrowDropUpIcon
            className={isMenuOpened ? classes.arrowDown : classes.arrowUp}
          />
        </div>

        <CustomizedMenus handleClose={handleClose} anchorEl={anchorEl} />
      </div>
    </header>
  );
};
