import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./notlogged.css";

const NotLogged = () => {
  return (
    <Fragment>
      <div className="buttoninfo">
        <div>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </div>
        <div>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink>
        </div>
        <div>
          <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
        </div>
      </div>
    </Fragment>
  );
};

export default NotLogged;
