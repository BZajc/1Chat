import React, { useEffect } from "react";
import ChatConnected from "./ChatConnected";
import { useDispatch, useSelector } from "react-redux";
import {
  setConnecting,
  selectConnecting,
  setConnected,
  selectConnected,
} from "../store/slices/chatSlice";
import Lottie from "lottie-react";
import loadingCircle from "../lottie/loadingCircle.json";

function Chat() {
  const dispatch = useDispatch();
  const connecting = useSelector(selectConnecting);
  const connected = useSelector(selectConnected);

  // Check if the user is still connecting after 4s, if yes then set connected to true and connecting to false
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (connecting) {
      timer = setTimeout(() => {
        // If the user is still connecting after 4s, set connected to true and connecting to false
        if (connecting) {
          dispatch(setConnected(true));
          dispatch(setConnecting(false));
        }
      }, 100);
    }
    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [connecting, dispatch]);

  // Run or stop the chat connection
  const handleStartChat = () => {
    dispatch(setConnecting(!connecting));
  };

  return (
    <div className="chat">
      <div className="chat__box">
        {!connected && (
          <div className="chat__find-user-box">
            <p className="chat__find-user-text">
              {connecting
                ? "Looking for a chat..."
                : "Find someone to chat with"}
            </p>
            {connecting ? (
              <Lottie
                animationData={loadingCircle}
                className="chat__loading-icon"
              />
            ) : null}
            <button className="chat__start-button" onClick={handleStartChat}>
              {connecting ? "Leave queue" : "Start Chat"}
            </button>
          </div>
        )}
        {connected && <ChatConnected />}
      </div>
    </div>
  );
}

export default Chat;
