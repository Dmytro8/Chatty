import React, { useContext } from "react";
import { UserContext, ProfileContext } from "../contexts/ProfileContext";

export const ChannelPage = () => {
  const { profile } = useContext(ProfileContext);
  return (
    <div>
      <h1>Channel page</h1>
      <h3>
        Welcome {profile.name} {profile.surname}
      </h3>
    </div>
  );
};
