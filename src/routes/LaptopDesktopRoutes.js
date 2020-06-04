import React, { Suspense } from "react";
import { LaptopDesktopLayout } from "../layouts/LaptopDesktopLayout/LaptopDesktopLayout";
import { Spinner } from "../components/common/FormControls";
import { MAIN, SETTINGS, CHAT } from "../constants/url";
import { Redirect, Route, Switch } from "react-router";
import { SettingsPage } from "../pages/SettingsPage";
import { ChatPage } from "../pages/ChatPage/ChatPage";

export const LaptopDesktopRoutes = () => {
  return (
    <LaptopDesktopLayout>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path={`${CHAT}/:username`} exact component={ChatPage} />
          <Route path={SETTINGS} exact component={SettingsPage} />
          <Redirect to={MAIN} />
        </Switch>
      </Suspense>
    </LaptopDesktopLayout>
  );
};
