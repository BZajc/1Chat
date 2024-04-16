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
  FaArrowRightToBracket,
  FaRegSquarePlus,
  FaFaceLaughBeam,
} from "react-icons/fa6";
import {
  setUserImage,
  selectUserImage,
  setUserName,
  selectUserName,
  addMessage,
  selectMessages,
  setConnected,
  removeMessages
} from "../store/slices/chatSlice";

function ChatConnected() {
  const [userButtons, showUserButtons] = useState(false);
  const [inputButtons, showInputButtons] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const userImage = useSelector(selectUserImage);
  const userName = useSelector(selectUserName);
  const messages = useSelector(selectMessages);

  useEffect(() => {
    if (!userImage) {
      dispatch(setUserImage(faker.image.avatar()));
    }
    if (!userName) {
      dispatch(setUserName(faker.internet.userName()));
    }
  }, [dispatch, userImage, userName]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputValue("");
    dispatch(addMessage({ message: inputValue, type: "right" }));
    setTimeout(() => {
      dispatch(
        addMessage({
          message: faker.lorem.words(Math.floor(Math.random() * 13) + 3), //Generate random words between 3 and 15
          type: "left",
        })
      );
    }, 1000);
  };

  const displayMessage = () => {
    return messages.map((message, index) => (
      <div key={index} className={`chat__connected-${message.type}-message`}>
        {message.message}
      </div>
    ));
  };

  const onMoreButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    showInputButtons(!inputButtons);
  };

  const onLeaveChat = () => {
    dispatch(setConnected(false));
    dispatch(removeMessages());
    dispatch(setUserImage(""));
    dispatch(setUserName(""));
  }

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
          <button className="chat__connected-button">
            <FaThumbsUp className="chat__connected-button-icon " />
          </button>
        </li>
        <li className="chat__connected-item">
          <button className="chat__connected-button">
            <FaThumbsDown className="chat__connected-button-icon " />
          </button>
        </li>
        <li className="chat__connected-item">
          <button className="chat__connected-button">
            <FaUserPlus className="chat__connected-button-icon " />
          </button>
        </li>
        <li className="chat__connected-item">
          <button className="chat__connected-button">
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
            <button className="chat__connected-leave-button" onClick={onLeaveChat}>
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
