import React, { useEffect, useContext } from "react";
import { useForm, Controller } from "react-hook-form";

import { SignupSchema } from "../FormValidation";

import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Grid from "@material-ui/core/Grid";

import { StyledTextField, AccentButton } from "../../common/FormControls";
import { Logo } from "../../Logo";
import { useHttp } from "../../../hooks/httpHook";
import { AuthContext } from "../../../contexts/AuthContext";

import { motion } from "framer-motion";
import { containerVariants } from "../../../routes/AuthRoutes";

export const SignUpForm = () => {
  const { loading, request, error, clearError } = useHttp();
  const { handleSubmit, control, errors } = useForm({
    validationSchema: SignupSchema,
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

  const capitalizeData = (word) => {
    return word[0].toUpperCase() + word.slice(1);
  };
  const onSubmit = async (data) => {
    const { name, surname } = data;

    try {
      const dataResponse = await request("/api/auth/signup", "POST", {
        ...data,
        name: capitalizeData(name),
        surname: capitalizeData(surname),
      });
      await request(`/api/user/${dataResponse.userId}`, "PUT", {
        is_active: true,
        last_seen: Date.now(),
      });
      auth.login(dataResponse.token, dataResponse.userId);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    return () => {
      clearError();
    };
  }, [clearError]);

  return (
    <motion.form
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      id="signup"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Logo />
      <Grid container alignItems="flex-end">
        <Grid item style={{ width: "100%" }}>
          {errors.name || error ? (
            <Controller
              error
              as={StyledTextField}
              style={{ width: "100%" }}
              name="name"
              label="Name"
              control={control}
              defaultValue=""
              helperText={errors.name ? errors.name.message : null}
            />
          ) : (
            <Controller
              as={StyledTextField}
              style={{ width: "100%" }}
              name="name"
              label="Name"
              control={control}
              defaultValue=""
            />
          )}
        </Grid>
      </Grid>
      <Grid container alignItems="flex-end">
        <Grid item style={{ width: "100%" }}>
          {errors.surname || error ? (
            <Controller
              error
              as={StyledTextField}
              style={{ width: "100%" }}
              name="surname"
              label="Surname"
              control={control}
              defaultValue=""
              helperText={errors.surname ? errors.surname.message : null}
            />
          ) : (
            <Controller
              as={StyledTextField}
              style={{ width: "100%" }}
              name="surname"
              label="Surname"
              control={control}
              defaultValue=""
            />
          )}
        </Grid>
      </Grid>
      <Grid container alignItems="flex-end">
        <Grid item style={{ width: "100%" }}>
          {errors.email || error ? (
            <Controller
              error
              as={StyledTextField}
              style={{ width: "100%" }}
              name="email"
              label="Email"
              control={control}
              defaultValue=""
              helperText={errors.email ? errors.email.message : null}
            />
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
        <Grid item style={{ width: "100%" }}>
          {errors.password || error ? (
            <Controller
              error
              as={StyledTextField}
              style={{ width: "100%" }}
              name="password"
              id="password"
              type={values.showPassword ? "text" : "password"}
              label="Password"
              control={control}
              helperText={errors.password ? errors.password.message : null}
              defaultValue=""
              htmlFor="password"
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
              id="password"
              type={values.showPassword ? "text" : "password"}
              label="Password"
              control={control}
              rules={{ required: true }}
              defaultValue=""
              htmlFor="password"
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
      <AccentButton
        variant="contained"
        type="submit"
        disabled={loading}
        style={{ marginTop: "20px" }}
      >
        Sign Up
      </AccentButton>
    </motion.form>
  );
};
