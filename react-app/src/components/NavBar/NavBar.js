import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./navbar.css";
import logo from "../images/BetterReads-logos_black.png";
import Logged from "./Logged";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [display, setDisplay] = useState(false);
  const session = useSelector((state) => state.session);

  useEffect(() => {
		const closeDropdown = e => {
				if (e.path[1].className !== 'dont-close' && e.path[1].className !== 'dont-close' && e.path[0].className !== 'fa-solid fa-caret-down dont-close' && e.path[0].className !== 'dont-close' ) {
          setDisplay(false)
				}
		}

		document.body.addEventListener('click', closeDropdown)

		return () => document.body.removeEventListener('click', closeDropdown)
	}, [])


    return (
      <div id="nav-bar-full">
        <div id="nav-bar-left-container">
          <Link to="/home">
            <img src={logo} alt="Logo" id="splash-logo" />
          </Link>
          <Link id="nav-bar-link" to="/home" ><p>Home</p></Link>
          <Link to="/bookshelves/all" id="nav-bar-link">My Books</Link>
        </div>
        <div id="nav-bar-left-container">
          <Link to="/about" id="nav-bar-link">About</Link>
          <Link to="/books/new" id="nav-bar-link">Add a Book</Link>
          <div className="dont-close" id="nav-bar-profile-div" onClick={() => setDisplay(!display)}>
            <i className="fa-solid fa-bars"></i>
            <img alt="profile" id="nav-bar-profile-pic" src={session?.user?.picture_url} />

          </div>
          {display && <Logged />}

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
