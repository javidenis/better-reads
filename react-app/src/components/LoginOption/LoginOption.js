import "./loginoption.css";
import {useHistory } from "react-router-dom";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";


const LoginOptions = ({setShowLogin, setShowSignup}) => {
  const dispatch = useDispatch();
  const history = useHistory()



  const demoHandler = async () => {
    await dispatch(login("demo@aa.io", "password"));
    history.push('/home')
  };

  const aboutHandler = async () => {
    history.push('/about')
  };


  return (
    <div className="log_component">
      <div className="log_component_header">Discover & read more</div>
      <div>
          <button onClick={() => setShowSignup(true)} className="signup_button_log">Sign up with email</button>
      </div>
      <p id="login-form-terms">By creating an account, you agree to the Goodreads Terms of Service and Privacy Policy.</p>
      <div id="login-form-signin-container">
        <p>Already a member? <span id="login-form-signin-link" onClick={()=> setShowLogin(true)}>Sign In</span></p>
        <p id="login-form-signin-link" onClick={demoHandler}>Demo User</p>
      </div>
      <p onClick={aboutHandler} id="login-form-about-link">About Better Reads</p>
    </div>
  );
};

export default LoginOptions;
