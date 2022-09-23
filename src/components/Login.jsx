import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Box,
  Container
} from "@mui/material";

const defaultValues = {
  username: "",
  password: ""
};

const Login = (props) => {
  const [formValues, setFormValues] = useState(defaultValues);
  const [usernameIsValid, setUsernameIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const indentifier = setTimeout(() => {
      setFormIsValid(
        formValues.username.includes("@") &&
          formValues.password.trim().length > 6
      );
    }, 500);

    //Clean Up
    return () => {
      clearTimeout(indentifier);
    };
  }, [formValues]);

  const validateUsername = () => {
    setUsernameIsValid(formValues.username.includes("@"));
  };
  const validatePassword = () => {
    setPasswordIsValid(formValues.password.trim().length > 6);
  };

  const handleInputChange = (input) => (e) => {
    setFormValues({
      ...formValues,
      [input]: e.target.value
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onLogin(formValues);
    console.log(formValues);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Stock Management System
          </Typography>
        </Toolbar>
      </AppBar>

      <form onSubmit={handleSubmit}>
        <Paper elevation={3} p={2}>
          <Container maxWidth="xs">
            <Box p={2}>
              <TextField
                fullWidth
                error={formValues.username !== "" && !usernameIsValid}
                autoComplete="email.com"
                autoFocus
                id="username"
                name="username"
                label="UserName"
                type="text"
                value={formValues.username}
                onChange={handleInputChange("username")}
                onBlur={validateUsername}
              />
            </Box>
            <Box p={2}>
              <TextField
                fullWidth
                error={formValues.password !== "" && !passwordIsValid}
                id="password"
                name="password"
                label="password"
                type="password"
                value={formValues.password}
                onChange={handleInputChange("password")}
                onBlur={validatePassword}
              />
            </Box>
            <Box p={2}>
              <Button
                disabled={!formIsValid}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Log In
              </Button>
            </Box>
          </Container>
        </Paper>
      </form>
    </>
  );
};
export default Login;
