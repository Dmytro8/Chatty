import React, { useEffect, useContext, useState } from "react";
import PropTypes from "prop-types";
import classes from "./ProfileAvatar.module.scss";
import { changeStatusSocketOn } from "../../utils/Sockets/onSockets";

export const ProfileAvatar = ({
  profileUrl,
  isOnlineIcon,
  isUserActive,
  userName,
}) => {
  useEffect(() => {
    return () => {};
  }, [profileUrl]);
  // const [isActive, setIsActive] = useState(false);
  // const { profile } = useContext(ProfileContext);
  // useEffect(() => {
  //   let mounted = true;
  //   if (mounted) {
  //     setIsActive(isActive);
  //   }
  //   return () => (mounted = false);
  // }, [isActive]);
  // client.on("changeStatus", ({ isActive }) => {
  //   console.log(`Client socket: changeStatus to ${isActive}`);
  // });
  // setIsActive(changeStatusSocketOn);
  const getAvatar = (avatar) => {
    return avatar !== "" ? (
      <img src={avatar} alt="profile avatar" />
    ) : (
      <span>{userName}</span>
    );
  };
  return (
    <div className={classes.avatarItem}>
      <div className={classes.avatarImg}>{getAvatar(profileUrl)}</div>
      {isOnlineIcon && isUserActive ? (
        <div className={classes.onlineStatus}>
          <span></span>
        </div>
      ) : null}
    </div>
  );
};

ProfileAvatar.defaultProps = {
  profileUrl: "",
  isOnlineIcon: false,
  isUserActive: false,
  userName: "U",
};

ProfileAvatar.propTypes = {
  profileUrl: PropTypes.string,
  isOnlineIcon: PropTypes.bool,
  isUserActive: PropTypes.bool,
};
