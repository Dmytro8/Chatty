import React, { Suspense } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import { AuthLayout } from "../layouts/AuthLayout";
import { LOGIN, SIGNUP } from "../constants/url";
import { LoginForm } from "../components/Forms/LoginForm";
import { SignUpForm } from "../components/Forms/SignUpForm";

import { AnimatePresence } from "framer-motion";

export const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", delay: 0.3 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

export const AuthRoutes = () => {
  const location = useLocation();
  return (
    <AuthLayout>
      <Suspense
        fallback={
          <div>
            Loading ...
            {/* <Preloader /> */}
          </div>
        }
      >
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
            <Route path={LOGIN} exact component={LoginForm} />
            <Route path={SIGNUP} exact component={SignUpForm} />
            <Redirect to={LOGIN} />
          </Switch>
        </AnimatePresence>
      </Suspense>
    </AuthLayout>
  );
};
