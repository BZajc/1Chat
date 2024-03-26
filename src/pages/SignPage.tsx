import React from "react";
import { Firestore } from "firebase/firestore";
import SignUp from "../components/SingUp";

interface SignPageProps {
  db: Firestore;
}

function SignPage({ db }: SignPageProps) {
  return (
    <header>
      <div className="sign-page">
      <SignUp db={db} />
        {/* <h1 className="sign-page__h1">1Chat: Let it happen</h1> */}
      </div>
    </header>
  );
}

export default SignPage;
