import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/session";

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [bio, setBio] = useState("")
  let [picture_url, setPicture_url] = useState(null)
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();

    if (!picture_url) {
      picture_url = 'https://www.hrlact.org/wp-content/uploads/2020/12/generic-user-icon.jpg'
    }

    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password, picture_url, name, bio));
      if (data) {
        setErrors(data);
      }
    }
  };

  const updateImage = (e) => {
    const file = e.target.files[0]
    setPicture_url(file)
  }

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
      <div className="signupform">
        <form onSubmit={onSignUp} className='actualform'>
          <div>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div>
            <label>User Name</label>
            <input
              type="text"
              name="username"
              onChange={updateUsername}
              value={username}
            ></input>
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              onChange={updateEmail}
              value={email}
            ></input>
          </div>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={e=>setName(e.target.value)}
              value={name}
            >
            </input>
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={updatePassword}
              value={password}
            ></input>
          </div>
          <div>
            <label>Repeat Password</label>
            <input
              type="password"
              name="repeat_password"
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            ></input>
          </div>
          <div>
            <label>Bio</label>
            <textarea
              name="bio"
              onChange={e=>setBio(e.target.value)}
              value={bio}
            ></textarea>
          </div>
          <div>
            <label className="custom-file-upload">
              Profile Picture Upload
              <input 
                className="pfp" 
                accept="image/*"
                onChange={updateImage}
                type="file" 
              />
            </label>
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </Fragment>
  );
};

export default SignUpForm;
