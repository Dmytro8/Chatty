import React from "react";
import { Link } from "react-router-dom";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SettingsIcon from "@material-ui/icons/Settings";

import classes from "./NavLinks.module.scss";

export const NavLinks = ({
  handleModalOpen,
  setIsSideDrawerOpened,
  setIsAnotherPageOpened,
}) => {
  return (
    <nav>
      <ul>
        <li
          onClick={() => {
            setIsSideDrawerOpened(false);
            setIsAnotherPageOpened(true);
          }}
        >
          <Link to="/settings">
            <SettingsIcon />
            <h4>Settings</h4>
          </Link>
        </li>
        <li onClick={handleModalOpen}>
          <ExitToAppIcon />
          <h4>Logout</h4>
        </li>
      </ul>
    </nav>
  );
};
