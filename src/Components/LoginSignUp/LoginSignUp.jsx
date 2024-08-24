import React from "react";
import "./LoginSignUp.css";
// Now insertinf all the images from assets folder
import user_icon from "/src/assets/person.png";
import email_icon from "/src/assets/email.png";
import password_icon from "/src/assets/password.png";
import { useState } from "react";
function LoginSignUp() {
  // A s we know when Our varibale Gets Updated frotend also gets updated means its change reflects in UI.
  let [action, setAction] = useState("Sign Up");
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"> </div>
      </div>

      <div className="inputs">
        {action === "Sign Up" ? (
          <div className="input">
            <img src={user_icon} />
            <input type="text" placeholder="Name" />
          </div>
        ) : (
          <div></div>
        )}
        <div className="input">
          <img src={email_icon} />
          <input type="email" placeholder="Email Id" />
        </div>
        <div className="input">
          <img src={password_icon} />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Lost password ? <span>Click here!</span>
        </div>
      )}
      {/* This lost password is Not in Sign Up ....its in Logic part */}
      {/* <div className="forgot-password">
        Lost password ? <span>Click here!</span>
      </div> */}
      <div className="submit-container">
        {/* Here we have to provide dynamic className*/}
        {/* <button className="submit">Sign Up</button>
        <button className="submit">Login</button> */}
        {/* The purpsoe of this is that Jo bhi name ho ga Sign Up/Login uss pr pahli css property lg gai gi. */}
        {/* Now further we will apply OnClick bcz we want that that Onclicking the state name should also change */}
        <button
          className={action === "Sign Up" ? "submit " : "submit gray"}
          onClick={() => setAction("Sign Up")}
        >
          Sign Up
        </button>
        <button
          className={action === "Login" ? "submit" : "submit gray"}
          onClick={() => setAction("Login")}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginSignUp;
