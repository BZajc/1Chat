import React, { useState, useEffect, useCallback } from "react";
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
  FaArrowRightToBracket,
  FaRegSquarePlus,
  FaFaceLaughBeam,
  FaUserMinus,
} from "react-icons/fa6";
import {
  setUserImage,
  selectUserImage,
  setUserName,
  selectUserName,
  addMessage,
  selectMessages,
  setConnected,
  removeMessages,
  selectUserId,
  setUserId,
  selectFeedback,
  setFeedback,
  selectAddUser,
  setAddUser,
  selectBlockUser,
  setBlockUser,
} from "../store/slices/chatSlice";
import { setChatHistory } from "../store/slices/chatHistorySlice";
import {
  setPopupVisible,
  setPopupMessage,
  setPopupData,
} from "../store/slices/popupSlice";
import { PopupState } from "../store/slices/popupSlice";
import { setMiniNav } from "../store/slices/navSlice";

function ChatConnected() {
  const [userButtons, showUserButtons] = useState(false);
  const [inputButtons, showInputButtons] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const userImage = useSelector(selectUserImage);
  const userName = useSelector(selectUserName);
  const userId = useSelector(selectUserId);
  const messages = useSelector(selectMessages);
  const feedback = useSelector(selectFeedback);
  const addUser = useSelector(selectAddUser);
  const blockUser = useSelector(selectBlockUser);

  useEffect(() => {
    if (!userImage) {
      dispatch(setUserImage(faker.image.avatar()));
    }
    if (!userName) {
      dispatch(setUserName(faker.internet.userName()));
    }
    if (!userId) {
      const randomId = new Date().getTime();
      dispatch(setUserId(randomId));
    }
  }, [dispatch, userImage, userName, userId]);

  useEffect(() => {
    dispatch(
      setChatHistory({
        userImage: userImage || "",
        userName: userName || "",
        id: userId || 0,
        messages,
      })
    );
  }, [userImage, userName, userId, messages, dispatch]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // Used to display when the message was sent
  const getCurrentTime = () => {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addMessage({
        message: inputValue,
        type: "right",
        time: getCurrentTime(),
        profileImage: "",
      })
    );
    setInputValue("");
    setTimeout(() => {
      dispatch(
        addMessage({
          message:
            faker.lorem
              .words(Math.floor(Math.random() * 13) + 3)
              .charAt(0)
              .toUpperCase() +
            faker.lorem.words(Math.floor(Math.random() * 13) + 3).slice(1), // Random message with 3-15 words and first letter capitalized
          type: "left",
          time: getCurrentTime(),
          profileImage: userImage || "",
        })
      );
    }, 1000);
  };

  const displayMessage = () => {
    return messages.map((message, index) => (
      <div key={index} className={`chat__connected-${message.type}-message`}>
        {message.message}
        <p className="chat__connected-message-time">{message.time}</p>
      </div>
    ));
  };

  // Show or hide user buttons
  const onMoreButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    showInputButtons(!inputButtons);
  };

  // Leave chat and reset chat state
  const onLeaveChat = useCallback(() => {
    dispatch(setConnected(false));
    dispatch(removeMessages());
    dispatch(setUserImage(""));
    dispatch(setUserName(""));
    dispatch(setUserId(0));
    dispatch(setAddUser(false));
    dispatch(setFeedback("none"));
    dispatch(setBlockUser(false));
  }, [dispatch]);

  const displayPopup = (data: PopupState["popupType"], text: string) => {
    dispatch(setMiniNav(true));
    dispatch(setPopupVisible(true));
    dispatch(setPopupMessage(text));
    dispatch(setPopupData(data));
  };

  // Leave chat if user is blocked 
  useEffect(() => {
    if (blockUser) {
      onLeaveChat();
    }
  }, [blockUser, onLeaveChat]);

  // Display feedback icons based on feedback state in chatSlice
  const displayFeedback = () => {
    switch (feedback) {
      case "positive":
        return (
          <div className="chat__feedback-box">
            <FaThumbsUp className="chat__feedback-icon chat__feedback-icon--positive" />
          </div>
        );
      case "negative":
        return (
          <div className="chat__feedback-box">
            <FaThumbsDown className="chat__feedback-icon chat__feedback-icon--negative" />
          </div>
        );
      case "none":
        return null;
      default:
        return null;
    }
  };

  // Display text based on addUser state in chatSlice
  const addUserText = () => {
    return addUser
      ? `Do you want to remove ${userName} from contacts?`
      : `Do you want to add ${userName} to contacts?`;
  };

  return (
    <div className="chat__connected-box">
      <div className="chat__connected-user-info">
        <div className="chat__image-and-name-box">
          <img src={userImage || ""} alt="user" className="chat__user-image" />
          <p className="chat__user-name">{userName}</p>
        </div>
        <button
          className="chat__user-button"
          onClick={() => showUserButtons(!userButtons)}
        >
          <PiUserFocusLight />
        </button>
        {displayFeedback()}
      </div>
      <ul
        className={`chat__connected-buttons-box ${
          userButtons ? "chat__connected-buttons-box-active" : ""
        }`}
      >
        <li className="chat__connected-item">
          <button className="chat__connected-button">
            <FaUser className="chat__connected-button-icon " />
          </button>
        </li>
        <li className="chat__connected-item">
          <button
            className="chat__connected-button"
            onClick={() => {
              displayPopup(
                "positive-feedback",
                `Do you want to leave positive feedback for ${userName}?`
              );
            }}
          >
            <FaThumbsUp className="chat__connected-button-icon " />
          </button>
        </li>
        <li className="chat__connected-item">
          <button
            className="chat__connected-button"
            onClick={() => {
              displayPopup(
                "negative-feedback",
                `Do you want to leave negative feedback for ${userName}?`
              );
            }}
          >
            <FaThumbsDown className="chat__connected-button-icon " />
          </button>
        </li>
        <li className="chat__connected-item">
          <button
            className="chat__connected-button"
            onClick={() => {
              displayPopup("add", addUserText());
            }}
          >
            {addUser ? (
              <FaUserMinus className="chat__connected-button-icon " />
            ) : (
              <FaUserPlus className="chat__connected-button-icon " />
            )}
          </button>
        </li>
        <li className="chat__connected-item">
          <button
            className="chat__connected-button"
            onClick={() => {
              displayPopup(
                "block",
                `Do you want to block ${userName}? This action will finish the chat, and the user will also be removed from contacts if they were added`
              );
            }}
          >
            <FaUserSlash className="chat__connected-button-icon " />
          </button>
        </li>
      </ul>

      <h3 className="chat__successfully-connected">
        You have been connected to{" "}
        <span className="chat__yellow-text">{userName}</span>. Say hello
      </h3>
      <div className="chat__messages-box">{displayMessage()}</div>
      <div className="chat__messages-fix"></div>

      <form className="chat__input-box" onSubmit={onSubmit}>
        <input
          type="text"
          className="chat__input"
          placeholder="Type a message..."
          value={inputValue}
          onChange={onChange}
        />
        <button className="chat__send-button">
          <FaRegPaperPlane className="chat__send-icon" />
        </button>
        <button className="chat__more-button" onClick={onMoreButtonClick}>
          <FaRegSquarePlus className="chat__more-icon" />
        </button>
      </form>

      <div
        className={`chat__connected-more-box ${
          inputButtons ? "chat__connected-more-box-active" : ""
        }`}
      >
        <ul className="chat__connected-more-list">
          <li className="chat__connected-more-item">
            <button className="chat__connected-emoji-button">
              <FaFaceLaughBeam className="chat__connected-emoji-icon" />
            </button>
          </li>
          <li className="chat__connected-more-item">
            <button
              className="chat__connected-leave-button"
              onClick={onLeaveChat}
            >
              Leave chat
              <FaArrowRightToBracket className="chat__connected-leave-icon" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ChatConnected;
