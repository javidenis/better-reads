import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect} from "react-router-dom";
import { login } from "../../store/session";
import "./signup.css";
import logo from "../images/BetterReads-logos_black.png";

const LoginForm = ({setShowLogin}) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleCancel= e => {
    e.preventDefault()
    setShowLogin(false)
  }

  if (user) {
    return <Redirect to="/home" />;
  }

  const demoHandler = async (e) => {
    e.preventDefault()
    await dispatch(login("demo@aa.io", "password"));
    
  };

  return (
    <div id="signup-container">
      <img alt="logo" id="splash-logo" src={logo}></img>
      <p id='signup-header'>Login</p>
    <form id="form-container" onSubmit={onLogin}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>

        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
        />


        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
        <button type="submit">Login</button>
        <button onClick={(e) => demoHandler(e)}>Demo User</button>
        <button onClick={(e) => handleCancel(e)}>Cancel</button>
    </form>
    </div>
  );
};

export default LoginForm;
