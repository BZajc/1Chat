import React from "react";
// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMiniNav, setMiniNav } from "../store/slices/navSlice";
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
import { useNavigate } from "react-router-dom";
import { signOut, getAuth } from "firebase/auth";

function MobileNav() {
  const dispatch = useDispatch();
  const miniNav = useSelector(selectMiniNav);
  const navigate = useNavigate();

  // // If user is not logged in redirect to signin page
  // useEffect(() => {
  //   const auth = getAuth();
  //   const user = auth.currentUser;
  //   if (user === null) {
  //     navigate("/signin");
  //   }
  // }, [navigate]);

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/signin");
      })
      .catch((error) => {
        console.log("Error signing out:", error);
      });
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
                dispatch(setMiniNav(!miniNav));
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
              onClick={() => navigate("/app/todo")}
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
              onClick={handleLogout}
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
