import "./styles.css";
import Home from "./components/Home";
import Login from "./components/Login";
import { useState } from "react";
const userData = [
  {
    username: "srraaz1998@gmail.com",
    password: "Suraz@1998s"
  },
  {
    username: "admin123@gmail.com",
    password: "admin123"
  }
];
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (userDataReceived) => {
    // checking the username and password
    for (var i = 0; i < userData.length; i++) {
      if (
        userData[i].username === userDataReceived.username &&
        userData[i].password === userDataReceived.password
      ) {
        localStorage.setItem("IsLoggedIn", "1");
        setIsLoggedIn(true);
      }
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("IsLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <>
      {!isLoggedIn && <Login onLogin={loginHandler} />}
      {isLoggedIn && <Home onLogout={logoutHandler} />}
    </>
  );
}
