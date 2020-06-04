import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import { ProfileAvatar } from "../../../ProfileAvatar/ProfileAvatar";
import classes from "./SideDrawer.module.scss";
import { LogoutModal } from "../../../Modals/LogoutModal/LogoutModal";
import { ProfileContext } from "../../../../context/ProfileContext";
import { AuthContext } from "../../../../context/AuthContext";
import { NavLinks } from "../NavLinks";
import { useHttp } from "../../../../hooks/httpHook";
import { logoutSocketEmit } from "../../../../utils/Sockets/emitSockets";

export const SideDrawer = ({
  setIsAnotherPageOpened,
  setIsSideDrawerOpened,
}) => {
  let history = useHistory();
  const { request } = useHttp();
  const auth = useContext(AuthContext);
  const { profile } = useContext(ProfileContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const profileUrl = "";
  const logoutHandler = async (event) => {
    await request(`/api/user/${auth.userId}`, "PUT", {
      is_active: false,
      last_seen: Date.now(),
    });
    logoutSocketEmit(auth.userId);
    auth.logout();
    history.push("/login");
  };
  const handleModalOpen = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={classes.sideDrawer}>
      <div className={classes.profilePanel}>
        <div className={classes.avatarWrapper}>
          <ProfileAvatar profileUrl={profileUrl} isOnlineIcon={false} />
        </div>
        <div className={classes.profileName}>
          <p>
            {profile.name} {profile.surname}
          </p>
        </div>
      </div>
      <NavLinks
        handleModalOpen={handleModalOpen}
        setIsSideDrawerOpened={setIsSideDrawerOpened}
        setIsAnotherPageOpened={setIsAnotherPageOpened}
      />
      <LogoutModal
        isModalOpen={isModalOpen}
        handleClose={handleModalClose}
        logoutHandler={logoutHandler}
      />
    </div>
  );
};
