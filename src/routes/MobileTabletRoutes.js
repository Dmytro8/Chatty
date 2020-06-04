import React, { Suspense, useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { MobileTabletLayout } from "../layouts/MobileTabletLayout";
import { MAIN, CHAT, SEARCH, SETTINGS } from "../constants/url";
import { Chat } from "../components/Chat";
import { ChannelPage } from "../pages/ChannelPage";
import { SearchPage } from "../pages/SearchPage";

import { SettingsPage } from "../pages/SettingsPage/SettingsPage";
import { Spinner } from "../components/common/FormControls";

export const MobileTabletRoutes = () => {
  return (
    <MobileTabletLayout>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path={MAIN} exact component={ChannelPage} />
          <Route path={SEARCH} exact component={SearchPage} />
          <Route path={SETTINGS} exact component={SettingsPage} />
          <Route path={CHAT} exact component={Chat} />
          <Redirect to={MAIN} />
        </Switch>
      </Suspense>
    </MobileTabletLayout>
  );
};
