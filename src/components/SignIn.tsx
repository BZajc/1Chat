import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCheckEmailMessage,
  setCheckEmailMessage,
} from "../store/slices/signSlice";
import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import logo from "../images/1chatlogo.png";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const checkEmailMessage = useSelector(selectCheckEmailMessage);
  const navigate = useNavigate();

  const handleLogin = async () => {
    const auth = getAuth();
    try {
      await setPersistence(auth, browserLocalPersistence);
      await signInWithEmailAndPassword(auth, email, password);
      // Check if the user's email is verified
      const user = auth.currentUser;
      if (user && !user.emailVerified) {
        console.error(
          "Email not verified. Please check your email for a verification link."
        );
        return;
      }
      console.log("Logged in successfully");
      navigate("/app/chat");
    } catch (error: any) {
      switch (error.code) {
        case "auth/invalid-email":
          console.error("Invalid email. Please enter a valid email.");
          break;
        case "auth/user-not-found":
          console.error(
            "User not found. Please check your email and password."
          );
          break;
        case "auth/wrong-password":
          console.error(
            "Wrong password. Please check your email and password."
          );
          break;
        default:
          console.error("Login error:", error);
          break;
      }
    }
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChangeForm = () => {
    navigate("/signup");
    dispatch(setCheckEmailMessage(false));
  };

  const handleForgotPassword = () => {
    navigate("/forgotpassword");
    dispatch(setCheckEmailMessage(false));
  };

  return (
    <div className="sign-in">
      <img src={logo} alt="1chat logo" className="sign-in__logo" />
      <div className="sign-in__overflow"></div>
      <form className="sign-in__form" onSubmit={handleSubmit}>
        <h2 className="sign-in__h2">Sign In</h2>
        {checkEmailMessage && (
          <p className="sign-in__register-message">
            Account has been created. Check your email.
          </p>
        )}
        <label htmlFor="email" className="sign-in__label">
          Email
        </label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="sign-in__input"
        />
        <label htmlFor="password" className="sign-in__label">
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="sign-in__input"
        />
        <button onClick={handleLogin}></button>{" "}
        <button
          className="sign-in__forgot-password"
          onClick={handleForgotPassword}
        >
          Forgot password?
        </button>
        <button onClick={handleLogin} className="sign-in__confirm">
          Log In
        </button>
        <div className="sign-in__change-form">
          <p className="sign-in__change-form-text">Don't have an account?</p>
          <button
            className="sign-in__change-form-button"
            onClick={handleChangeForm}
          >
            Sign up here
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
