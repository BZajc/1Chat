import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setPopupVisible,
  selectPopupMessage,
  selectPopupData,
  selectPopupId,
} from "../store/slices/popupSlice";
import {
  setFeedback,
  setAddUser,
  selectAddUser,
  setBlockUser,
} from "../store/slices/chatSlice";
import { setRemoveContact, selectChatHistory } from "../store/slices/chatHistorySlice";

function Popup() {
  const dispatch = useDispatch();
  const popupMessage = useSelector(selectPopupMessage);
  const popupData = useSelector(selectPopupData);
  const addUser = useSelector(selectAddUser);
  const popupId = useSelector(selectPopupId);
  const chatHistory = useSelector(selectChatHistory);

  const hidePopup = () => {
    dispatch(setPopupVisible(false));
  };

  // Logic for the popup buttons to perform different actions based on the popupData which is set in the popupSlice but managed in the ChatConnected component
  const confirmAction = (id: number | null) => {
    dispatch(setPopupVisible(false));
    switch (popupData) {
      case "positive-feedback":
        dispatch(setFeedback("positive"));
        break;
      case "negative-feedback":
        dispatch(setFeedback("negative"));
        break;
      case "add": // used to switch between false and true during the chat but doesn't work to remove contact, for this use "remove"
        dispatch(setAddUser(!addUser));
        break;
      case "block":
        dispatch(setBlockUser(true));
        break;
      case "remove":
        const user = chatHistory.find((user) => user.id === id);
        dispatch(setRemoveContact(user?.id || 0))
        dispatch(setAddUser(!addUser));

        break;
      default:
        break;
    }
  };

  return (
    <div className="popup">
      <div className="popup__background" onClick={hidePopup}></div>
      <div className="popup__box">
        <p className="popup__text">{popupMessage}</p>
        <div className="popup__buttons-box">
          <button className="popup__button" onClick={() => {confirmAction(popupId)}}>
            Yep
          </button>
          <button className="popup__button" onClick={hidePopup}>
            Nah
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
