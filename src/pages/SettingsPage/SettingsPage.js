import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useHttp } from "../../hooks/httpHook";

import { DeleteAccountModal } from "../../components/Modals/DeleteAccountModal/DeleteAccountModal";
import { ProfileAvatar } from "../../components/ProfileAvatar/ProfileAvatar";
import { ProfileContext } from "../../context/ProfileContext";
import { AuthContext } from "../../context/AuthContext";

import classes from "./SettingsPage.module.scss";

export const SettingsPage = () => {
  const profileContext = useContext(ProfileContext);
  const { name, surname, email, username, is_active } = profileContext.profile;
  console.log(profileContext);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const { request } = useHttp();
  let history = useHistory();
  const auth = useContext(AuthContext);
  const profileUrl = "";
  const handleModalOpen = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const deleteAccountRequest = async () => {
    await request(`/api/user/${auth.userId}`, "DELETE");
    auth.logout();
    history.push("/login");
    // console.log("input value is correct for deleting");
    //requst to server for deleting account
    //use history hook to redirect to login page
  };

  return (
    <div className={classes.settingsPage}>
      <section className={classes.profileStatusSection}>
        <div className={classes.imgWrapper}>
          <ProfileAvatar profileUrl={profileUrl} isOnlineIcon={false} />
        </div>
        <div className={classes.profileStatus}>
          <h3>{name}</h3>
          <h5>{is_active ? "online" : "offline"}</h5>
        </div>
      </section>
      <section className={classes.accoutSection}>
        <div className={classes.sectionTitle}>
          <h4>Account</h4>
        </div>
        <div className={classes.sectionItem}>
          <h4>{email}</h4>
          <h5>Email</h5>
        </div>
        <div className={classes.sectionItem}>
          <h4>@{username}</h4>
          <h5>Username</h5>
        </div>
      </section>
      <section className={classes.deleteAccountSection}>
        <div className={classes.sectionTitle} onClick={handleModalOpen}>
          <h4 className={classes.deleteAccount}>Delete account</h4>
        </div>
      </section>
      <DeleteAccountModal
        isModalOpen={isModalOpen}
        handleClose={handleModalClose}
        deleteAccountRequest={deleteAccountRequest}
      />
    </div>
  );
};
