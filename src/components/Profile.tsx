import React from "react";
import { getAuth } from "firebase/auth";
import { FaChartLine } from "react-icons/fa6";
import profileBg from "../images/profileBackground.jpg";
import {
  FaPlane,
  FaPuzzlePiece,
  FaRegImage,
  FaHashtag,
  FaRegMessage,
  FaSquareCheck,
  FaPlus,
} from "react-icons/fa6";
import profile1 from "../images/profileImage1.jpg";
import profile2 from "../images/profileImage2.jpg";
import profile3 from "../images/profileImage3.jpg";
function Profile() {
  const auth = getAuth();
  const user = auth.currentUser;
  return (
    <div className="profile">
      <p className="profile__visual-purposes">
        All data here {"(except profile image and nickname)"} are only for
        visual purposes and have no real functionality
      </p>
      <img
        src={profileBg}
        alt="nature in the background of profile tab"
        className="profile__background"
      />
      <div className="profile__box">
        <img
          src={
            user?.photoURL ??
            "https://www.creativefabrica.com/wp-content/uploads/2023/02/14/Big-Fat-Cat-61228835-1.png"
          }
          alt="user profile"
          className="profile__image"
        />
        <p className="profile__username">{user?.displayName}</p>
        <div className="profile__category-buttons-box">
          <button className="profile__category-button">General</button>
          <button className="profile__category-button">Activity</button>
        </div>

        {/* Container with quick info tiles */}
        <div className="profile__info-box">
          <div className="profile__info-tile">
            <FaChartLine className="profile__info-icon" />
            <button className="profile__tile-box">
              <p className="profile__tile-name">Your score</p>
              <p className="profile__tile-text">4.7 / 6.0</p>
            </button>
          </div>
          <div className="profile__info-tile profile__info-tile--tags">
            <FaHashtag className="profile__info-icon" />
            <button className="profile__tile-box">
              <p className="profile__tile-name">Your tags</p>
              <div className="profile__tags-box">
                <FaPlane className="profile__tag" />
                <FaPuzzlePiece className="profile__tag" />
                <FaRegImage className="profile__tag" />
              </div>
            </button>
          </div>
        </div>
        <div className="profile__info-box">
          <div className="profile__info-tile profile__info-tile--messages">
            <FaRegMessage className="profile__info-icon" />
            <button className="profile__tile-box profile__tile-box--messages">
              <p className="profile__tile-name">New messages</p>
              <p className="profile__tile-text">3 </p>
            </button>
          </div>
          <div className="profile__info-tile">
            <FaChartLine className="profile__info-icon" />
            <button className="profile__tile-box">
              <p className="profile__tile-name">Here should</p>
              <p className="profile__tile-text">be something</p>
            </button>
          </div>
        </div>

        {/* Container with messages */}
        <div className="profile__messages-box">
          <ul className="profile__messages-list">
            <li className="profile__messages-item">
              <img
                src={profile1}
                className="profile__messages-image"
                alt="cat as a placeholder for profile"
              />
              <p className="profile__messages-message">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
                quidem vitae officiis et voluptatum. Aliquam quibusdam
                dignissimos ad placeat voluptas?
              </p>
              <p className="profile__messages-time">
                17:48
                <FaSquareCheck className="profile__messages-read-icon" />
              </p>
            </li>
            <li className="profile__messages-item">
              <img
                src={profile2}
                className="profile__messages-image"
                alt="cat as a placeholder for profile"
              />
              <p className="profile__messages-message">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
                quidem vitae officiis et voluptatum. Aliquam quibusdam
                dignissimos ad placeat voluptas?
              </p>
              <p className="profile__messages-time">
                11:56 | yesterday{" "}
                <FaSquareCheck className="profile__messages-read-icon" />
              </p>
            </li>
            <li className="profile__messages-item">
              <img
                src={profile3}
                className="profile__messages-image"
                alt="cat as a placeholder for profile"
              />
              <p className="profile__messages-message">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
                quidem vitae officiis et voluptatum. Aliquam quibusdam
                dignissimos ad placeat voluptas?
              </p>
              <p className="profile__messages-time">
                12:00 | 4 april
                <FaSquareCheck className="profile__messages-read-icon" />
              </p>
            </li>
          </ul>
        </div>

        <h3 className="profile__description-h3">Describe yourself</h3>
        <textarea
          className="profile__description-input"
          placeholder="Describe yourself, what you like to do, what you are interested in, etc."
          spellCheck="false"
        />

        <h3 className="profile__photos-h3">Add photos</h3>
        <div className="profile__photos-box">
          <button className="profile__add-photo">
            <FaPlus className="profile__add-photo-icon" />
          </button>
          <button className="profile__photo-button">
            <img
              src={profile1}
              alt="cat as a placeholder for profile"
              className="profile__photo"
            />
          </button>
          <button className="profile__photo-button">
            <img
              src={profile2}
              alt="cat as a placeholder for profile"
              className="profile__photo"
            />
          </button>
          <button className="profile__photo-button">
            <img
              src={profile3}
              alt="cat as a placeholder for profile"
              className="profile__photo"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
