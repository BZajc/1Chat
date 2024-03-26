import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { Firestore } from "firebase/firestore";
import logo from "../images/1chatlogo.png";

interface SignUpProps {
  db: Firestore;
}
function SignUp({ db }: SignUpProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      console.error("Password and Confirm Password do not match");
      return;
    }
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    const auth = getAuth();
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      const usersCollection = collection(db, "users");
      await addDoc(usersCollection, { email, password });
      console.log("Registration successful");
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="sign-up">
      <img src={logo} alt="1chat logo" className="sign-up__logo" />
      <div className="sign-up__overflow"></div>
      <form className="sign-up__form" onSubmit={handleSubmit}>
        <h2 className="sign-up__h2">Create Account</h2>
        <label htmlFor="email" className="sign-up__label">
          Email
        </label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="sign-up__input"
        />
        <label htmlFor="password" className="sign-up__label">
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="sign-up__input"
        />
        <label htmlFor="confirmPassword" className="sign-up__label">
          Confirm Password
        </label>
        <input
          type="password"
          placeholder="Confirm Password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="sign-up__input"
        />
        <button className="sign-up__forgot-password">Forgot password?</button>
        <button onClick={handleRegister} className="sign-up__confirm">
          Register
        </button>
        <div className="sign-up__change-form">
          <p className="sign-up__change-form-text">Already got account?</p>
          <button className="sign-up__change-form-button">Log In here</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
