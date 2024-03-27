import React from "react";
import SignPage from "./pages/SignPage";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { Provider } from "react-redux";
import { store } from "./store/store";

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

function App() {
  return (
    <Provider store={store}>
      <SignPage db={db} />
    </Provider>
  );
}

export default App;
