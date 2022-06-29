import "./loginoption.css";
import { NavLink } from "react-router-dom";
const LoginOptions = () => {
  return (
    <div className="log_component">
      <div>
        <button className="login_button_log">
          <NavLink to="/sign-up">Login</NavLink>
        </button>
      </div>
      <div>
        <button className="signup_button_log">
          <NavLink to="/sign-up">Sign Up</NavLink>
        </button>
      </div>
      <div className="demo_button">
        <span>Want to look around?</span>
      </div>
    </div>
  );
};

export default LoginOptions;
