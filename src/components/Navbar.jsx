import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export default function Navbar(props) {
  const onLogoutButtonHandler = () => {
    props.onLogout();
  };
  return (
    <AppBar position="static" rounded>
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          Stock Management System
        </Typography>
        <Button variant="contained" onClick={onLogoutButtonHandler}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}
