import React, { useEffect, useState } from "react";
import { selectChatHistory } from "../store/slices/chatHistorySlice";
import { useSelector } from "react-redux";
import profile from "../images/profileImage1.jpg";
import { FaGear } from "react-icons/fa6";
import { PopupState } from "../store/slices/popupSlice";
import { useDispatch } from "react-redux";
import {
  setPopupVisible,
  setPopupMessage,
  setPopupData,
} from "../store/slices/popupSlice";

function AddedUsers() {
  const dispatch = useDispatch();
  const [showSettingsIndex, setShowSettingsIndex] = useState<number | null>(
    null
  );
  const chatHistory = useSelector(selectChatHistory);

  useEffect(() => {
    setShowSettingsIndex(null);
  }, [chatHistory]);

  // Show settings
  const handleClickSettings = (index: number) => {
    setShowSettingsIndex(index === showSettingsIndex ? null : index);
  };

  // Hide settings
  const handleHideSettings = () => {
    setShowSettingsIndex(null);
  };

  // Display popup when removing contact or opening chat
  const displayPopup = (data: PopupState["popupType"], text: string, id: number) => {
    dispatch(setPopupVisible(true));
    dispatch(setPopupMessage(text));
    dispatch(setPopupData({type: data, id}));
  };

  // Remove contact
  const handleRemoveContact = (username: string, id: number) => {
    displayPopup(
      "remove",
      `Are you sure you want to remove ${username} from contacts?`,
      id
    );
  };

  const renderContacts = () => {
    return chatHistory
      .filter((item) => item.added)
      .map((item, index) => {
        return (
          <div key={index} className="added__user-box">
            <img
              src={item.userImage || profile}
              alt="profile"
              className="added__user-image"
            />
            <p className="added__user-name">{item.userName}</p>
            <button
              className="added__settings-btn"
              onClick={() => handleClickSettings(index)}
            >
              <FaGear className="added__settings-icon" />
            </button>
            {showSettingsIndex === index && (
              <div className="added__settings-box">
                <img
                  src={item.userImage || profile}
                  alt="profile"
                  className="added__user-image added__user-image--settings"
                  onClick={handleHideSettings}
                />
                <button
                  className="added__settings-option-button"
                  onClick={() => {
                    if (item.userName) {
                      handleRemoveContact(item.userName, item.id);
                    }
                  }}
                >
                  Remove contact
                </button>
                <button className="added__settings-option-button">
                  Open chat
                </button>
              </div>
            )}
          </div>
        );
      });
  };

  return (
    <div className="added">
      <h3 className="added__h3">Your Contacts:</h3>
      <div className="added__box">{renderContacts()}</div>
    </div>
  );
}

export default AddedUsers;
