import * as yup from "yup";

const AtLeastOneLowercaseAlphabetical = "(?=.*[a-z])";
const AtLeastOneUppercaseAlphabetical = "(?=.*[A-Z])";
const AtLeastOneNumeric = "(?=.*[0-9])";
const AtLeastOneSpecial = "(?=.*[!@#$%^&*])";
const MustBeEightOrLonger = "(?=.{8,})";

const validEmailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const validPasswordRegex = new RegExp(
  `${AtLeastOneLowercaseAlphabetical}${AtLeastOneUppercaseAlphabetical}${AtLeastOneNumeric}`
);
const validUsernameRegex = /^[a-zA-Z]{2,}$/;

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .required("email is a required field")
    .matches(validEmailRegex, "enter a valid email"),
  password: yup
    .string()
    .required("password is a required field")
    .min(8)
    .matches(
      validPasswordRegex,
      "password must match at least one lowercase, one uppercase and one numeric character"
    )
});

export const SignupSchema = yup.object().shape({
  name: yup
    .string()
    .required("username is a required field")
    .min(2)
    .matches(validUsernameRegex, "name must match only alphabetical character"),
  surname: yup
    .string()
    .required("username is a required field")
    .min(2)
    .matches(
      validUsernameRegex,
      "surname must match only alphabetical character"
    ),
  email: yup
    .string()
    .required("email is a required field")
    .matches(validEmailRegex, "enter a valid email"),
  password: yup
    .string()
    .required("password is a required field")
    .min(8)
    .matches(
      validPasswordRegex,
      "password must match at least one lowercase, one uppercase and one numeric character"
    )
});

// let passwordTest = "PPP0PPPPPd";
// console.log(validPasswordRegex.test(passwordTest));

// let emailTest = "dm.patalakha@gmail.com";
// let emailTest = "mysite@ourearth.com";
// let emailTest = "mysite@.org.org";
// console.log(validEmailRegex.test(emailTest));
