import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { AuthLayout } from "../layouts/AuthLayout";
import { LOGIN, SIGNUP } from "../constants/url";
import { LoginForm } from "../components/Forms/LoginForm";
import { SignUpForm } from "../components/Forms/SignUpForm";

export const AuthRoutes = () => (
  <AuthLayout>
    <Suspense
      fallback={
        <div>
          Loading ...
          {/* <Preloader /> */}
        </div>
      }
    >
      <Switch>
        <Route path={LOGIN} exact component={LoginForm} />
        <Route path={SIGNUP} exact component={SignUpForm} />
        <Redirect to={LOGIN} />
      </Switch>
    </Suspense>
  </AuthLayout>
);
