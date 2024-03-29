import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../images/1chatlogo.png";
import { sendPasswordResetEmail, getAuth } from "firebase/auth";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleChangeFormToRegister = () => {
    navigate("/signup");
  };
  const handleChangeFormToLogin = () => {
    navigate("/signin");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleReset = async () => {
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      console.log("Password reset email sent");
    } catch (error: any) {
      console.error("Password reset error:", error);
    }
  };

  return (
    <div className="forgot-password">
      <img src={logo} alt="1chat logo" className="sign-in__logo" />
      <div className="forgot-password__overflow"></div>
      <form className="forgot-password__form" onSubmit={handleSubmit}>
        <h2 className="forgot-password__h2">Reset your password</h2>
        <label htmlFor="email" className="forgot-password__label">
          Email
        </label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="forgot-password__input"
        />
        <button onClick={handleReset} className="forgot-password__confirm">
          Reset
        </button>
        <div className="forgot-password__change-form">
          <p className="forgot-password__change-form-text">
            Don't have an account?
          </p>
          <button
            className="forgot-password__change-form-button"
            onClick={handleChangeFormToRegister}
          >
            Sign up here
          </button>
          <p className="forgot-password__change-form-text">
            Already got account?
          </p>
          <button
            className="forgot-password__change-form-button"
            onClick={handleChangeFormToLogin}
          >
            Log in here
          </button>
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;
