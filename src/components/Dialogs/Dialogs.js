import React, { useState, useEffect, useContext, Fragment } from "react";
// import _ from "lodash";
import { useHttp } from "../../hooks/httpHook";
import { Spinner } from "../common/FormControls";
import { NavLink } from "react-router-dom";
import { DialogItem } from "./DialogItem";
import { CHAT } from "../../constants/url";
import { ProfileContext } from "../../contexts/ProfileContext";

export const Dialogs = () => {
  const { request, loading } = useHttp();
  const [dialogs, setDialogs] = useState([]);
  const profileContext = useContext(ProfileContext);
  useEffect(() => {
    const fetchData = async () => {
      //in this place we must receive room with messages, not users
      const dialogs = await request(
        `/api/dialog/${profileContext.profile._id}`,
        "GET"
      );
      setDialogs(dialogs);
    };
    fetchData();
    return () => {};
  }, []);

  const activeDialogStyle = {
    borderLeft: "5px solid #8e24aa",
    borderRadius: "5px",
  };
  const dialogStyle = {
    display: "block",
    borderLeft: "5px solid transparent",
  };

  const dialogsItems = () => {
    return loading ? (
      <div>
        <Spinner />
      </div>
    ) : (
      dialogs
        .filter((dialog) => {
          return dialog.owner._id !== profileContext.profile.id;
        })
        .map((dialog) => {
          return (
            <NavLink
              to={`${CHAT}/${dialog.partner.username}`}
              key={dialog._id}
              style={dialogStyle}
              activeStyle={activeDialogStyle}
            >
              <DialogItem
                lastSeen={dialog.partner.last_seen}
                isActive={dialog.partner.is_active}
                name={dialog.partner.name}
                surname={dialog.partner.surname}
                isSearch={false}
                unreaded={3}
                message={dialog.lastMessage}
                createdAt={new Date()}
              />
            </NavLink>
          );
        })
    );
  };

  return (
    <Fragment>
      {dialogsItems()}
      {/* <NavLink
        to={`${CHAT}/${1}`}
        key={1}
        style={dialog}
        activeStyle={activeDialog}
      >
        <DialogItem
          isActive={true}
          name={"Name"}
          surname={"Surname"}
          isSearch={false}
          unreaded={3}
          message="Hello!"
          createdAt={new Date("April 21 2020 14:54")}
        />
      </NavLink>
      <NavLink
        to={`${CHAT}/${2}`}
        key={2}
        style={dialog}
        activeStyle={activeDialog}
      >
        <DialogItem
          isActive={false}
          name={"Name"}
          surname={"Surname"}
          isSearch={false}
          unreaded={3}
          message="Heeeeeelllllllooooooooooooooo"
          createdAt={new Date("April 22 2020 12:54")}
        />
      </NavLink>
      <NavLink
        to={`${CHAT}/${3}`}
        key={3}
        style={dialog}
        activeStyle={activeDialog}
      >
        <DialogItem
          isActive={false}
          name={"Name"}
          surname={"Surname"}
          isSearch={false}
          unreaded={3}
          message="hi"
          createdAt={new Date("April 24 2020 00:02")}
        />
      </NavLink>
      <NavLink
        to={`${CHAT}/${4}`}
        key={4}
        style={dialog}
        activeStyle={activeDialog}
      >
        <DialogItem
          isActive={true}
          name={"Name"}
          surname={"Surname"}
          isSearch={false}
          unreaded={3}
          message="s"
          createdAt={new Date("January 23 2019 12:54")}
        />
      </NavLink> */}
    </Fragment>
  );
};
