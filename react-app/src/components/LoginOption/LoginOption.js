import "./loginoption.css";
import { NavLink } from "react-router-dom";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";

const LoginOptions = () => {
  const dispatch = useDispatch();
  const demoHandler = () => {
    return dispatch(login("demo@aa.io", "password"));
  };
  return (
    <div className="log_component">
      <div className="log_component_header">Login or Signup Here</div>
      <div>
          <NavLink to="/login"><button className="login_button_log">Login</button></NavLink>
      </div>
      <div>
          <NavLink to="/sign-up"><button className="signup_button_log">Sign Up</button></NavLink>
      </div>
      <div className="demo_button_container">
        <button className="demo_button" onClick={demoHandler}>Demo User</button>
      </div>
    </div>
  );
};

export default LoginOptions;
