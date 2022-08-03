import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./navbar.css";
import logo from "../images/BetterReads-logos_black.png";
import Logged from "./Logged";
import NotLogged from "./NotLogged";
import { NavLink } from "react-router-dom";
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
  const background = session.user.picture_url

  const sectionStyle = {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  //Space
  return (
    <div>
      <div className="loginbar">
        <div className="logo_component">
          <div>
            <img src={logo} alt="Logo" className="logowe" />
          </div>
        </div>
        <div className="nav_component">
          <div>
            <NavLink to="/home" className="home_word">
              Home
            </NavLink>
          </div> 
          <div>
            <NavLink to="/bookshelves/all" className="mybook_word">
              My Books
            </NavLink>
          </div>

        </div>
        
        <div  className="buttoninfo">
          <div style={sectionStyle} className="profile_circle" onClick={showProfile}>

            <div>
              {display ? <div></div> : logged ? <Logged /> : <NotLogged />}
            </div>
          </div>
        </div>
      </div>
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
