import React, { useState } from "react";
import { FaFilter } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { setSortType, selectSortType } from "../store/slices/chatHistorySlice";
import { FaSquareCheck } from "react-icons/fa6";
import profile1 from "../images/profileImage1.jpg";
import { selectChatHistory } from "../store/slices/chatHistorySlice";

function ChatHistory() {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();
  const sortType = useSelector(selectSortType);
  const chatHistory = useSelector(selectChatHistory);

  const swapSortType = () => {
    const newSortType = sortType === "date" ? "name" : "date";
    dispatch(setSortType(newSortType));
  };

  const renderChatItems = () => {
    let filteredChatHistory = chatHistory
      .filter(
        (item) =>
          item.userName &&
          item.userName.toLowerCase().includes(inputValue.toLowerCase())
      )
      .filter((item) => item.id !== 0);

    if (sortType === "name") {
      filteredChatHistory = filteredChatHistory.sort(
        (a, b) => (a.userName || "").localeCompare(b.userName || "") || 0
      );
    } else {
      filteredChatHistory = filteredChatHistory.reverse();
    }

    return filteredChatHistory.map((item, index) => (
      <li key={index} className="chat-history__messages-item">
        <img
          src={item.userImage || profile1}
          className="chat-history__messages-image"
          alt="cat as a placeholder for profile"
        />
        <div className="chat-history__user-info-box">
          <p className="chat-history__user-name">{item.userName}</p>
          <p className="chat-history__message">
            {/* If the latest message was from you (so it has type "right") then display "You:" */}
            {item.messages?.[item.messages.length - 1]?.type === "right"
              ? "You: "
              : ""}
              {/* Display latest message */}
            {item.messages?.[item.messages.length - 1]?.message ||
              "No messages"}
          </p>
        </div>
        <p className="chat-history__messages-time">
          {item.messages?.[item.messages.length - 1]?.time || "--:--"}
          <FaSquareCheck className="chat-history__messages-read-icon" />
        </p>
      </li>
    ));
  };

  return (
    <div className="chat-history">
      <div className="chat-history__input-box">
        <div className="chat-history__input-top">
          <input
            className="chat-history__input"
            type="text"
            placeholder="Search user"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="chat-history__filter-button"
            onClick={swapSortType}
          >
            <FaFilter className="chat-history__filter-icon" />
          </button>
        </div>
        <div className="chat-history__input-bottom">
          <p className="chat-history__filter-type">Sorting by: {sortType}</p>
        </div>
        <div className="chat-history__messages-box">
          <ul className="chat-history__messages-list">{renderChatItems()}</ul>
        </div>
      </div>
    </div>
  );
}

export default ChatHistory;
