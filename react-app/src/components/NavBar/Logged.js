import {useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import "./logged.css";

const Logged = () => {
  //Checking login status
  const [logged, setLogged] = useState("");

  //grabbing the logged individual
  const session = useSelector((state) => state.session);

  //Session checking
  useEffect(() => {
    setLogged(session?.user ? session.user.username : "none");
  }, [session]);

  return (
      <div id="nav-bar-drop-down">
          <div id="nav-bar-drop-down-header" className="dont-close">Welcome, {logged}.</div>

            <NavLink className="nav-bar-drop-down-link" to="/profile" activeClassName="active" >
              Profile
              </NavLink>
            <LogoutButton />

        </div>

  );
};

export default Logged;
