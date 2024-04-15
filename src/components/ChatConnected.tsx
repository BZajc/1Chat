import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { faker } from "@faker-js/faker";
import { PiUserFocusLight } from "react-icons/pi";
import {
  FaUser,
  FaThumbsUp,
  FaThumbsDown,
  FaUserPlus,
  FaUserSlash,
  FaRegPaperPlane,
} from "react-icons/fa6";
import {
  setUserImage,
  selectUserImage,
  setUserName,
  selectUserName,
} from "../store/slices/chatSlice";
function ChatConnected() {
  const [buttons, showButtons] = useState(false);
  const dispatch = useDispatch();
  const userImage = useSelector(selectUserImage);
  const userName = useSelector(selectUserName);

  useEffect(() => {
    if (!userImage) {
      dispatch(setUserImage(faker.image.avatar()));
    }
    if (!userName) {
      dispatch(setUserName(faker.internet.userName()));
    }
  }, [dispatch, userImage, userName]);

  return (
    <div className="chat__connected-box">
      <div className="chat__connected-user-info">
        <div className="chat__image-and-name-box">
          <img src={userImage || ""} alt="user" className="chat__user-image" />
          <p className="chat__user-name">{userName}</p>
        </div>
        <button
          className="chat__user-button"
          onClick={() => showButtons(!buttons)}
        >
          <PiUserFocusLight />
        </button>
      </div>
      <ul
        className={`chat__connected-buttons-box ${
          buttons ? "chat__connected-buttons-box-active" : ""
        }`}
      >
        <li className="chat__connected-item">
          <button className="chat__connected-button">
            <FaUser className="chat__connected-button-icon chat__connected-button-icon--1" />
          </button>
        </li>
        <li className="chat__connected-item">
          <button className="chat__connected-button">
            <FaThumbsUp className="chat__connected-button-icon chat__connected-button-icon--2" />
          </button>
        </li>
        <li className="chat__connected-item">
          <button className="chat__connected-button">
            <FaThumbsDown className="chat__connected-button-icon chat__connected-button-icon--3" />
          </button>
        </li>
        <li className="chat__connected-item">
          <button className="chat__connected-button">
            <FaUserPlus className="chat__connected-button-icon chat__connected-button-icon--4" />
          </button>
        </li>
        <li className="chat__connected-item">
          <button className="chat__connected-button">
            <FaUserSlash className="chat__connected-button-icon chat__connected-button-icon--5" />
          </button>
        </li>
      </ul>

      <div className="chat__input-box">
        <input
          type="text"
          className="chat__input"
          placeholder="Type a message..."
        />
        <button className="chat__send-button">
            <FaRegPaperPlane className="chat__send-icon"/>
        </button>
      </div>
    </div>
  );
}

export default ChatConnected;
