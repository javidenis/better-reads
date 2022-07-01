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
    <div>
      <div className="login_component">
        <div className="login_info">
          <div>Welcome, {logged}.</div>
          <div>
            <NavLink to="/home" activeClassName="active">
              Home
            </NavLink>
          </div>
          <div>
            <NavLink to="/profile" activeClassName="active">
              Profile
            </NavLink>
          </div>
          <div>
            <NavLink to="/books/new" activeClassName="active">
              Add a Book
            </NavLink>
          </div>
          <div>
            <LogoutButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logged;
