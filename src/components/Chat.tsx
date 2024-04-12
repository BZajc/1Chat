import React from "react";
import { Firestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
interface SignUpProps {
  db: Firestore;
}

function Chat({ db }: SignUpProps) {

  const handleStartChat = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    console.log(user);
  }

  return (
    <div className="chat">
      <div className="chat__box">
        <h1>CHAT TEST</h1>
        <button className="chat__start-button" onClick={handleStartChat}>Start Chat</button>
      </div>
    </div>
  );
}

export default Chat;
