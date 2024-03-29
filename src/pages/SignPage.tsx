import React from "react";
import { Firestore } from "firebase/firestore";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import ForgotPassword from "../components/ForgotPassword";

interface SignPageProps {
  db: Firestore;
}

function SignPage({ db }: SignPageProps) {
  return (
    <div className="sign-page">
      <header>
        <SignUp db={db} />
        <SignIn />
        <ForgotPassword />
      </header>
    </div>
  );
}

export default SignPage;
