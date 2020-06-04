import React, { useEffect, useState, Fragment } from "react";
import Media from "react-media";

import { BrowserRouter as Router } from "react-router-dom";

import { AuthRoutes } from "../routes/AuthRoutes";
import { useAuth } from "../hooks/authHook";
import { AuthContext } from "../context/AuthContext";

import "./App.module.scss";
import { useHttp } from "../hooks/httpHook";
import { ProfileContext } from "../context/ProfileContext";
import { Spinner } from "../components/common/FormControls";
import { loginSocketEmit } from "../utils/Sockets/emitSockets";
import { MobileTabletRoutes } from "../routes/MobileTabletRoutes";
import { LaptopDesktopRoutes } from "../routes/LaptopDesktopRoutes";
import { API_BASE_URL_GLOBAL } from "../constants/general";

export const App = () => {
  const { token, login, logout, userId } = useAuth();
  const isAuthenticated = !!token;
  const [profile, setProfile] = useState(null);
  const [searchUser, setSearchUser] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const { request } = useHttp();
  useEffect(() => {
    if (isAuthenticated) {
      const fetchData = async () => {
        const responseData = await request(`/api/user/${userId}`, "GET");
        setProfile(responseData);
        setIsAuthorized(true);
        loginSocketEmit(userId);
      };
      fetchData();
    }
    return () => {
      setIsAuthorized(false);
    };
  }, [userId]);

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        userId,
        isAuthenticated,
      }}
    >
      <Router>
        {isAuthenticated ? (
          <Fragment>
            {isAuthorized ? (
              <ProfileContext.Provider
                value={{ profile, searchUser, setSearchUser }}
              >
                <Media
                  queries={{
                    small: "(max-width: 768px)",
                    large: "(min-width: 769px)",
                  }}
                >
                  {(matches) => (
                    <Fragment>
                      {matches.small && <MobileTabletRoutes />}
                      {matches.large && <LaptopDesktopRoutes />}
                    </Fragment>
                  )}
                </Media>
                {/* <MainRoutes /> */}
              </ProfileContext.Provider>
            ) : (
              <Spinner />
            )}
          </Fragment>
        ) : (
          <AuthRoutes />
        )}
      </Router>
    </AuthContext.Provider>
  );
};
