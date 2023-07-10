import React from "react";
import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setLogin } from "../state";
import { images } from "../constants";

const registerSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

const initialValuesRegister = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const initialValuesLogin = {
  email: "",
  password: "",
};

const Form = () => {
  const [pageType, setPageType] = useState("login");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";
  const mode = useSelector((state) => state.mode);

  const register = async (values, onSubmitProps) => {
    const registerResponse = await fetch(
      "http://localhost:3001/auth/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }
    );

    onSubmitProps.resetForm();

    if (registerResponse.ok) {
      const registered = await registerResponse.json();
      dispatch(
        setLogin({
          user: registered.user,
          token: registered.token,
        })
      );
      navigate("/home");
    }
  };

  const login = async (values, onSubmitProps) => {
    const loggedInResponse = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    onSubmitProps.resetForm();

    if (loggedInResponse.ok) {
      const loggedIn = await loggedInResponse.json();
      dispatch(
        setLogin({
          user: loggedIn.user,
          token: loggedIn.token,
        })
      );
      navigate("/home");
    }
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    if (isLogin) await login(values, onSubmitProps);
    if (isRegister) await register(values, onSubmitProps);
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
      validationSchema={isLogin ? loginSchema : registerSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
      }) => (
        <form
          onSubmit={handleSubmit}
          style={{ fontFamily: "Ubuntu, sans-serif" }}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            {mode === "light" ? (
              <img src={images.logo} height="50" alt="audio-insight-logo" />
            ) : (
              <img
                src={images.logoLight}
                height="50"
                alt="audio-insight-logo"
              />
            )}
            <Typography
              sx={{
                marginTop: "1rem",
                color: mode === "light" ? "black" : "white",
                fontSize: "2rem",
                fontWeight: "500",
                fontFamily: "Ubuntu, sans-serif",
                textAlign: "center",
              }}
            >
              {isLogin ? "Log in" : "Create an account"}
            </Typography>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="row"
            >
              <Typography
                sx={{
                  textDecoration: "none",
                  marginBottom: "2rem",
                  marginTop: "1rem",
                  fontFamily: "Ubuntu, sans-serif",
                  color: "var(--light-grey)",
                  textAlign: "center",
                }}
              >
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}
              </Typography>
              <Typography
                onClick={() => {
                  setPageType(isLogin ? "register" : "login");
                  resetForm();
                }}
                sx={{
                  textDecoration: "none",
                  marginBottom: "2rem",
                  marginTop: "1rem",
                  marginLeft: "0.3rem",
                  fontFamily: "Ubuntu, sans-serif",
                  color: "var(--neon-blue)",
                  textAlign: "center",
                  "&:hover": {
                    cursor: "pointer",
                    textDecoration: "underline",
                  },
                }}
              >
                {isLogin ? "Sign up" : "Log in"}
              </Typography>
            </Box>
          </Box>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            {isRegister && (
              <>
                <TextField
                  label="First Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  name="firstName"
                  error={
                    Boolean(touched.firstName) && Boolean(errors.firstName)
                  }
                  helperText={touched.firstName && errors.firstName}
                  sx={{
                    gridColumn: "span 2",
                    fontFamily: "Ubuntu, sans-serif",
                    "& input": {
                      color: "var(--onyx)",
                    },
                    "& label": {
                      color: "var(--onyx)",
                    },
                    "& .Mui-focused": {
                      color: "var(--onyx)",
                      borderColor: "var(--onyx)",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "var(--light-grey)",
                      },
                    },
                    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "var(--onyx)",
                      },
                  }}
                />
                <TextField
                  label="Last Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  name="lastName"
                  error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                  sx={{
                    gridColumn: "span 2",
                    fontFamily: "Ubuntu, sans-serif",
                    "& input": {
                      color: "var(--onyx)",
                    },
                    "& label": {
                      color: "var(--onyx)",
                    },
                    "& .Mui-focused": {
                      color: "var(--onyx)",
                      borderColor: "var(--onyx)",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "var(--light-grey)",
                      },
                    },
                    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "var(--onyx)",
                      },
                  }}
                />
              </>
            )}

            <TextField
              label="Email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              name="email"
              error={Boolean(touched.email) && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              sx={{
                gridColumn: "span 4",
                fontFamily: "Ubuntu, sans-serif",
                "& input": {
                  color: "var(--onyx)",
                },
                "& label": {
                  color: "var(--onyx)",
                },
                "& .Mui-focused": {
                  color: "var(--onyx)",
                  borderColor: "var(--onyx)",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "var(--light-grey)",
                  },
                },
                "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "var(--onyx)",
                  },
              }}
            />
            <TextField
              label="Password"
              type="password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
              name="password"
              error={Boolean(touched.password) && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              sx={{
                gridColumn: "span 4",
                fontFamily: "Ubuntu, sans-serif",
                "& input": {
                  color: "var(--onyx)",
                },
                "& label": {
                  color: "var(--onyx)",
                },
                "& .Mui-focused": {
                  color: "var(--onyx)",
                  borderColor: "var(--onyx)",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "var(--light-grey)",
                  },
                },
                "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "var(--onyx)",
                  },
              }}
            />
          </Box>

          {/* BUTTONS */}
          <Box>
            <Button
              fullWidth
              type="submit"
              sx={{
                marginTop: "2rem",
                p: "1rem",
                backgroundColor: "var(--neon-blue)",
                borderRadius: "20px",
                color: mode === "light" ? "var(--white)" : "white",
                border: "1px solid var(--neon-blue)",
                fontFamily: "Ubuntu, sans-serif",
                "&:hover": { color: "var(--onyx)", borderColor: "var(--onyx)" },
              }}
            >
              {isLogin ? "LOGIN" : "REGISTER"}
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default Form;
