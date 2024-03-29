import React, { useEffect } from "react";
import logo from "../images/1chatlogo.png";
import {
  FaGithub,
  FaChevronLeft,
  FaChevronRight,
  FaGrip,
  FaRegMessage,
  FaRegUser,
  FaUsers,
  FaPaintbrush,
  FaUserCheck,
  FaUserSlash,
  FaGear,
  FaDoorClosed,
  FaDoorOpen,
  FaCode,
} from "react-icons/fa6";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLoggedIn, setLoggedIn } from "../store/slices/signSlice";
import { useDispatch } from "react-redux";

function MobileNav() {
  const [miniNav, setMiniNav] = useState(false);
  const loggedIn = useSelector(selectLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Logged in:", loggedIn);
  }, [loggedIn]);

  const handleLogoutClick = () => {
    dispatch(setLoggedIn(false));
    navigate("/signin");
  };

  return (
    <div className={`mobile-nav ${miniNav ? "mobile-nav--mini" : ""}`}>
      <div className="mobile-nav__top-box">
        <img className="mobile-nav__logo" src={logo} alt="Docplanner Group" />
        <p className="mobile-nav__user-counter">Users Connected: 1525</p>
      </div>
      <div className="mobile-nav__middle-box">
        <ul className="mobile-nav__list">
          <li className="mobile-nav__item">
            <a
              href="https://github.com/BZajc/1Chat"
              className="mobile-nav__github-button mobile-nav__button"
            >
              <p className="mobile-nav__github-text">
                Check on Github
                <FaGithub className="mobile-nav__github-icon" />
              </p>
            </a>
            <button
              className="mobile-nav__nav-button mobile-nav__button"
              onClick={() => {
                setMiniNav(!miniNav);
              }}
            >
              {miniNav ? (
                <FaChevronRight className="mobile-nav__nav-icon" />
              ) : (
                <FaChevronLeft className="mobile-nav__nav-icon" />
              )}
            </button>
          </li>
          <li className="mobile-nav__item">
            <button
              className="mobile-nav__option-button"
              onClick={() => navigate("/app/chat")}
            >
              <FaCode className="mobile-nav__option-icon" />
              <p className="mobile-nav__option-name">To do</p>
            </button>
          </li>
          <li className="mobile-nav__item">
            <button
              className="mobile-nav__option-button"
              onClick={() => navigate("/app/chat")}
            >
              <FaRegMessage className="mobile-nav__option-icon" />
              <p className="mobile-nav__option-name">Join Chat</p>
            </button>
          </li>
          <li className="mobile-nav__item">
            <button
              className="mobile-nav__option-button"
              onClick={() => navigate("/app/dashboard")}
            >
              <FaGrip className="mobile-nav__option-icon" />
              <p className="mobile-nav__option-name">Dashboard</p>
            </button>
          </li>
          <li className="mobile-nav__item">
            <button
              className="mobile-nav__option-button"
              onClick={() => navigate("/app/profile")}
            >
              <FaRegUser className="mobile-nav__option-icon" />
              <p className="mobile-nav__option-name">Profile</p>
            </button>
          </li>
          <li className="mobile-nav__item">
            <button
              className="mobile-nav__option-button"
              onClick={() => navigate("/app/history")}
            >
              <FaUsers className="mobile-nav__option-icon" />
              <p className="mobile-nav__option-name">Chat History</p>
            </button>
          </li>
          <li className="mobile-nav__item">
            <button className="mobile-nav__option-button">
              <FaPaintbrush className="mobile-nav__option-icon" />
              <p className="mobile-nav__option-name">Customize</p>
            </button>
          </li>
          <li className="mobile-nav__item">
            <button
              className="mobile-nav__option-button"
              onClick={() => navigate("/app/added")}
            >
              <FaUserCheck className="mobile-nav__option-icon" />
              <p className="mobile-nav__option-name">Added Users</p>
            </button>
          </li>
          <li className="mobile-nav__item">
            <button
              className="mobile-nav__option-button"
              onClick={() => navigate("/app/blocked")}
            >
              <FaUserSlash className="mobile-nav__option-icon" />
              <p className="mobile-nav__option-name">Blocked Users</p>
            </button>
          </li>
          <li className="mobile-nav__item">
            <button
              className="mobile-nav__option-button"
              onClick={() => navigate("/app/settings")}
            >
              <FaGear className="mobile-nav__option-icon" />
              <p className="mobile-nav__option-name">Settings</p>
            </button>
          </li>
          <li className="mobile-nav__item">
            <button
              className="mobile-nav__option-button mobile-nav__option-button--logout"
              onClick={handleLogoutClick}
            >
              <FaDoorClosed className="mobile-nav__option-icon mobile-nav__option-icon--closed" />
              <FaDoorOpen className="mobile-nav__option-icon mobile-nav__option-icon--open" />
              <p className="mobile-nav__option-name">Log Out</p>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileNav;
