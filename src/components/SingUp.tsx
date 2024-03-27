import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { Firestore } from "firebase/firestore";
import logo from "../images/1chatlogo.png";
import { useDispatch, useSelector } from "react-redux";
import {
  selectRegisterMessage,
  setRegisterMessage,
} from "../store/slices/signSlice";

interface SignUpProps {
  db: Firestore;
}
function SignUp({ db }: SignUpProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const registerMessage = useSelector(selectRegisterMessage);

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      console.error("Password and Confirm Password do not match");
      dispatch(
        setRegisterMessage("Password and Confirm Password do not match")
      );
      return;
    }
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    const auth = getAuth();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const usersCollection = collection(db, "users");
      await addDoc(usersCollection, { email, password });
      await sendEmailVerification(user);
      dispatch(
        setRegisterMessage("Registration successful. Please verify your email.")
      );  
    } catch (error: any) {
      switch (error.code) {
      case "auth/invalid-email":
        dispatch(setRegisterMessage("Invalid email. Please enter a valid email."));
        break;
      case "auth/email-already-in-use":
        dispatch(setRegisterMessage("Email is already in use. Please use a different email."));
        break;
      case "auth/weak-password":
        dispatch(setRegisterMessage("Weak password. Please choose a stronger password."));
        break;
      default:
        dispatch(setRegisterMessage("Something went wrong. Please try again."));
        break;
      }
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
        <p className="sign-up__register-message">{registerMessage}</p>
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
