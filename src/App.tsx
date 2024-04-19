import React from "react";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { Provider } from "react-redux";
import { store } from "./store/store";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import ForgotPassword from "./components/ForgotPassword";
import ToDo from "./components/ToDo";
import Chat from "./components/Chat";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import ChatHistory from "./components/ChatHistory";
import AddedUsers from "./components/AddedUsers";
import BlockedUsers from "./components/BlockedUsers";
import Settings from "./components/Settings";
import MobileNav from "./components/MobileNav";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/signin" />} />
          <Route path="/signup" element={<SignUp db={db} />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />

          {/* Main Content */}
          <Route path="/app" element={<><MobileNav /><Outlet /></>}>
            <Route path="todo" element={<ToDo />} />
            <Route path="chat" element={<Chat/>} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="history" element={<ChatHistory />} />
            <Route path="added" element={<AddedUsers />} />
            <Route path="blocked" element={<BlockedUsers />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default AppWrapper;
