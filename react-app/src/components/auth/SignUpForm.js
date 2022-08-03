import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect} from "react-router-dom";
import { signUp } from "../../store/session";
import { getAllUsersThunk } from "../../store/users";
import logo from "../images/BetterReads-logos_black.png";

const SignUpForm = ({setShowSignup}) => {
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



    if(picture_url && 
    !picture_url.name.endsWith("png") &&
    !picture_url.name.endsWith("jpg") &&
    !picture_url.name.endsWith( "pdf") &&
    !picture_url.name.endsWith("jpeg") &&
    !picture_url.name.endsWith("gif")
    ){
    setErrors(['File type not allowed'])
    return
  }



    if (!picture_url) {
      picture_url = 'https://www.hrlact.org/wp-content/uploads/2020/12/generic-user-icon.jpg'
    }
    

    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password, picture_url, name, bio));
      if (data) {
        setErrors(data);
      } else {
        await dispatch(getAllUsersThunk())
      }
    } else {
      setErrors(['Passwords do not match.']);
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

  const cancelForm = (e) => {
    e.preventDefault()
    setShowSignup(false)
  }

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div id='signup-container'>
      <img alt="logo" id="splash-logo" src={logo}></img>
      <p id='signup-header'>Create Account</p>
        <form id='form-container' onSubmit={onSignUp} >
            <div>
              {errors.map((error, ind) => (
                <div key={ind}>{error}</div>
              ))}
            </div>
            <label>Your name</label>
            <input
              type="text"
              name="name"
              onChange={e=>setName(e.target.value)}
              value={name}
            >
            </input>
            <label>User Name</label>
            <input
              type="text"
              name="username"
              onChange={updateUsername}
              value={username}
            ></input>
            <label>Email</label>
            <input
              type="text"
              name="email"
              onChange={updateEmail}
              value={email}
            ></input>
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={updatePassword}
              value={password}
            ></input>
            <label>Repeat Password</label>
            <input
              type="password"
              name="repeat_password"
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            ></input>
            <label>Short Biography</label>
            <textarea
              name="bio"
              onChange={e=>setBio(e.target.value)}
              value={bio}
            ></textarea>
            <label className="custom-file-upload">
              {!picture_url ? 'Profile Picture Upload (optional)': 'Uploaded!'}
              <input 
                className="pfp" 
                accept="image/*"
                onChange={updateImage}
                type="file" 
              />
            </label>
          <button type="submit">Sign Up</button>
          <button onClick={e=>cancelForm(e)} >Cancel</button>
        </form>

    </div>
  );
};

export default SignUpForm;
