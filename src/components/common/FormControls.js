import React from "react";
import { useForm, Controller } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import { purple, red, grey } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

export const AccentButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[600]),
    backgroundColor: purple[600],
    "&:hover": {
      backgroundColor: purple[700],
      overflow: "hidden",
    },
    borderRadius: "25px",
    fontSize: "15px",
    boxShadow: "5px 5px 25px -8px rgba(164, 55, 226, 0.8)",
  },
}))(Button);

export const ErrorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    "&:hover": {
      backgroundColor: red[700],
      overflow: "hidden",
    },
    "& div.Mui-focused": {
      borderColor: red[500],
    },

    borderRadius: "5px",
    fontSize: "15px",
  },
}))(Button);

export const StyledTextField = withStyles({
  root: {
    "&:hover": {
      ".MuiInput-underline:after": {
        borderBottomColor: red[400],
      },
    },
    "& label.Mui-focused": {
      color: "#8e24aa",
    },
    "& label.Mui-error.Mui-focused": {
      color: "#f44336",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#8e24aa",
    },
    "& .MuiInput-underline.Mui-error:after": {
      borderBottomColor: red[500],
    },
  },
})(TextField);

export const OutlinedInput = withStyles({
  "@global": {
    ".MuiFormLabel-root.Mui-focused": {
      color: purple[600],
    },
  },
  root: {
    width: "19vw",
    minWidth: "330px",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: grey[300],
      },
      "&:hover fieldset": {
        borderColor: grey[400],
      },
      "&.Mui-focused fieldset": {
        borderColor: purple[600],
      },
    },
  },
})(TextField);
// export const InputNoBorder = withStyles({
//   // "@global": {
//   //   ".MuiFormLabel-root.Mui-focused": {
//   //     color: purple[600],
//   //   },
//   // },
//   root: {
//     width: "100%",
//     minWidth: "280px",
//     "& .MuiOutlinedInput-root": {
//       "& fieldset": {
//         borderColor: "trasparent",
//       },
//       "&:hover fieldset": {
//         borderColor: "trasparent",
//       },
//       "&.Mui-focused fieldset": {
//         borderColor: "trasparent",
//       },
//     },
//   },
// })(TextField);

export const FormError = ({ error }) => {
  return (
    <p style={{ color: "#f44336", fontSize: "13px", marginBottom: "0" }}>
      {error}
    </p>
  );
};

export const Spinner = withStyles({
  root: {
    color: purple[600],
    position: "absolute",
    left: "50%",
    marginLeft: "-20px",
    top: "50%",
    marginTop: "-20px",
  },
})(CircularProgress);

// export const Input = ({ isError, isIcon, ...props }) => {
//   const { control } = useForm();
//   return (
//     <>
//       {isError ? (
//         <Grid container alignItems="flex-end">
//           {isIcon ? (
//             <>
//               <Grid item style={{ width: "10%" }}>
//                 <AccountCircle style={{ color: "#f44336" }} />
//               </Grid>
//               <Grid item style={{ width: "90%" }}>
//                 <Controller
//                   error
//                   as={StyledTextField}
//                   style={{ width: "100%" }}
//                   name="username"
//                   label="Username"
//                   control={control}
//                   rules={{ required: true }}
//                   defaultValue=""
//                   {...props}
//                 />
//               </Grid>
//             </>
//           ) : (
//             <Grid item style={{ width: "100%" }}>
//               <Controller
//                 error
//                 as={StyledTextField}
//                 style={{ width: "100%" }}
//                 name="username"
//                 label="Username"
//                 control={control}
//                 rules={{ required: true }}
//                 defaultValue=""
//                 {...props}
//               />
//             </Grid>
//           )}
//         </Grid>
//       ) : (
//         <Grid container alignItems="flex-end">
//           {isIcon ? (
//             <>
//               <Grid item style={{ width: "10%" }}>
//                 <AccountCircle style={{ color: purple[600] }} />
//               </Grid>
//               <Grid item style={{ width: "90%" }}>
//                 <Controller
//                   as={StyledTextField}
//                   style={{ width: "100%" }}
//                   name="username"
//                   label="Username"
//                   control={control}
//                   rules={{ required: true }}
//                   defaultValue=""
//                   {...props}
//                 />
//               </Grid>
//             </>
//           ) : (
//             <Grid item style={{ width: "100%" }}>
//               <Controller
//                 as={StyledTextField}
//                 style={{ width: "100%" }}
//                 name="username"
//                 label="Username"
//                 control={control}
//                 rules={{ required: true }}
//                 defaultValue=""
//                 // {...props}
//               />
//             </Grid>
//           )}
//         </Grid>
//       )}
//     </>
//   );
// };
