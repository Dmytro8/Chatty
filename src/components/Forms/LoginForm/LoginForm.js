import React, { useState, useEffect, useContext } from "react";
import { useForm, Controller } from "react-hook-form";

import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Grid from "@material-ui/core/Grid";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import { purple } from "@material-ui/core/colors";
import {
  StyledTextField,
  AccentButton,
  FormError,
} from "../../common/FormControls";

import { LoginSchema } from "../FormValidation";
import { Logo } from "../../Logo";
import { useHttp } from "../../../hooks/httpHook";
import { AuthContext } from "../../../contexts/AuthContext";
import { authenticatedSocketEmit } from "../../../utils/Sockets/emitSockets";

export const LoginForm = () => {
  const { loading, request, error, clearError } = useHttp();
  const { handleSubmit, control, errors } = useForm({
    validationSchema: LoginSchema,
  });
  const auth = useContext(AuthContext);
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const onSubmit = async (data) => {
    try {
      const dataResponse = await request("/api/auth/login", "POST", {
        ...data,
      });
      await request(`/api/user/${dataResponse.userId}`, "PUT", {
        is_active: true,
        last_seen: Date.now(),
      });
      auth.login(dataResponse.token, dataResponse.userId);
    } catch (e) {
      // console.log(e.message);
    }
  };
  useEffect(() => {
    return () => {
      clearError();
    };
  }, [clearError]);

  return (
    <form id="login" onSubmit={handleSubmit(onSubmit)}>
      <Logo />
      <Grid container alignItems="flex-end">
        {errors.email || error ? (
          <Grid
            item
            style={{ width: "10%", display: "grid", alignSelf: "center" }}
          >
            <EmailIcon style={{ color: "#f44336" }} />
          </Grid>
        ) : (
          <Grid item style={{ width: "10%" }}>
            <EmailIcon style={{ color: purple[600] }} />
          </Grid>
        )}

        <Grid item style={{ width: "90%" }}>
          {errors.email || error ? (
            <>
              <Controller
                error
                as={StyledTextField}
                style={{ width: "100%" }}
                name="email"
                label="Email"
                control={control}
                defaultValue=""
                helperText={errors.email ? errors.email.message : ""}
              />
            </>
          ) : (
            <Controller
              as={StyledTextField}
              style={{ width: "100%" }}
              name="email"
              label="Email"
              control={control}
              defaultValue=""
            />
          )}
        </Grid>
      </Grid>
      <Grid container alignItems="flex-end">
        {errors.password || error ? (
          <Grid
            item
            style={{ width: "10%", display: "grid", alignSelf: "center" }}
          >
            <LockIcon
              style={{
                color: "#f44336",
              }}
            />
          </Grid>
        ) : (
          <Grid item style={{ width: "10%" }}>
            <LockIcon style={{ color: purple[600] }} />
          </Grid>
        )}

        <Grid item style={{ width: "90%" }}>
          {errors.password || error ? (
            <Controller
              error
              label="Password"
              as={StyledTextField}
              style={{ width: "100%" }}
              name="password"
              type={values.showPassword ? "text" : "password"}
              control={control}
              defaultValue=""
              helperText={errors.password ? errors.password.message : ""}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          ) : (
            <Controller
              as={StyledTextField}
              style={{ width: "100%" }}
              name="password"
              type={values.showPassword ? "text" : "password"}
              label="Password"
              control={control}
              defaultValue=""
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
        </Grid>
      </Grid>
      {error ? <FormError error={error} /> : null}
      <AccentButton
        type="submit"
        variant="contained"
        disabled={loading}
        style={{ marginTop: "20px" }}
      >
        Login
      </AccentButton>
    </form>
  );
};
