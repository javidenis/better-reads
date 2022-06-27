import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./navbar.css";
import logo from "../images/BetterReads-logos_black.png";
import Logged from "./Logged";
import NotLogged from "./NotLogged";
const NavBar = () => {
  //Checking login status
  const [logged, setLogged] = useState(false);

  //Checking display
  const [display, setDisplay] = useState(true);

  // Current Session
  const session = useSelector((state) => state.session);

  //Controlling the logout button
  useEffect(() => {
    setLogged(session?.user ? true : false);
  }, [session]);

  //control profile
  const showProfile = () => {
    setDisplay(display ? false : true);
  };

  //Space
  return (
    <div className="loginbar">
      <img src={logo} alt="Logo" className="logowe" />
      <button className="profile_circle" onClick={showProfile}>
        {display ? <div></div> : logged ? <Logged /> : <NotLogged />}
      </button>
    </div>
  );
};

export default NavBar;

// <nav>
//   <ul>
//     <li>
//       <NavLink to="/" exact={true} activeClassName="active">
//         Home
//       </NavLink>
//     </li>
//     <li>
//       <NavLink to="/login" exact={true} activeClassName="active">
//         Login
//       </NavLink>
//     </li>
//     <li>
//       <NavLink to="/sign-up" exact={true} activeClassName="active">
//         Sign Up
//       </NavLink>
//     </li>
//     <li>
//       <NavLink to="/users" exact={true} activeClassName="active">
//         Users
//       </NavLink>
//     </li>
//     {logged && <LogoutButton />}
//   </ul>
// </nav>;
