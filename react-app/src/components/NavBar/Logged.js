import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";

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
    <Fragment>
      <div className="buttoninfo">
        <div>{logged}</div>
        <div>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </div>
        <div>
          <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>
        </div>
        <div>
          <LogoutButton />
        </div>
      </div>
    </Fragment>
  );
};

export default Logged;
