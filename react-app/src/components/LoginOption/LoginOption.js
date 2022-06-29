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
      <div>
        <button className="login_button_log">
          <NavLink to="/login">Login</NavLink>
        </button>
      </div>
      <div>
        <button className="signup_button_log">
          <NavLink to="/sign-up">Sign Up</NavLink>
        </button>
      </div>
      <div>
        <div className="line"></div>
      </div>
      <div className="demo_button">
        <span>Want to look around?</span>
        <button onClick={demoHandler}>Demo User</button>
      </div>
    </div>
  );
};

export default LoginOptions;
