import React, { useContext, useEffect, useState } from "react";
import { ProfileContext } from "../../context/ProfileContext";

import classes from "./SearchPage.module.scss";
import { useHttp } from "../../hooks/httpHook";
import { DialogItem } from "../../components/Dialogs/DialogItem";
import { Spinner } from "../../components/common/FormControls";
import { NavLink } from "react-router-dom";
import { CHAT } from "../../constants/url";

export const SearchPage = () => {
  const profileData = useContext(ProfileContext);
  const { loading, request, error, clearError } = useHttp();
  const [foundUsers, setFoundUsers] = useState([]);
  const foundUsersComponents = () => {
    if (foundUsers !== []) {
      return foundUsers
        .filter((user) => {
          return user._id !== profileData.profile._id;
        })
        .map((user) => (
          <NavLink to={`${CHAT}/${user.username}`} key={user._id}>
            <DialogItem
              isActive={user.is_active}
              name={user.name}
              surname={user.surname}
              isSearch={true}
              lastSeen={user.last_seen}
            />
          </NavLink>
        ));
    } else return;
  };
  useEffect(() => {
    const fetchData = async () => {
      if (profileData.searchUser !== "") {
        const data = await request(
          `/api/user/search/${profileData.searchUser}`,
          "GET"
        );
        setFoundUsers(data);
      } else {
        setFoundUsers([]);
      }
    };
    fetchData();

    return () => {};
  }, [profileData.searchUser]);

  return (
    <div className={classes.foundUsersWrapper}>
      {loading ? <Spinner /> : foundUsersComponents()}
    </div>
  );
};
