import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import React from "react";
import { Firestore } from "firebase/firestore";
import SignUp from "../components/SingUp";
import SignIn from "../components/SignIn";

interface SignPageProps {
  db: Firestore;
}

function RedirectToSignIn() {
  let navigate = useNavigate();
  React.useEffect(() => {
    navigate('/signup');
  }, [navigate]);

  return null;
}

function SignPage({ db }: SignPageProps) {
  return (
    <Router>
      <header>
        <div className="sign-page">
          <Routes>
            <Route path="/signup" element={<SignUp db={db} />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/" element={<RedirectToSignIn />}></Route>
          </Routes>
        </div>
      </header>
    </Router>
  );
}

export default SignPage;