import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import "./navbar.css";
import logo from "../images/BetterReads-logos.jpeg";
const NavBar = () => {
  //Checking login status
  const [logged, setLogged] = useState(false);

  // Current Session
  const session = useSelector((state) => state.session);

  //Controlling the logout button
  useEffect(() => {
    setLogged(session?.user ? true : false);
  }, [session]);

  return (
    <div className="loginbar">
      <img src={logo} alt="Logo" />
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact={true} activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" exact={true} activeClassName="active">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/sign-up" exact={true} activeClassName="active">
              Sign Up
            </NavLink>
          </li>
          <li>
            <NavLink to="/users" exact={true} activeClassName="active">
              Users
            </NavLink>
          </li>
          {logged && <LogoutButton />}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
