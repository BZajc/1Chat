import React from "react";
import {
  FaChartLine,
  FaHashtag,
  FaPlane,
  FaPuzzlePiece,
  FaRegImage,
  FaRegMessage,
  FaSquareCheck,
  FaPlus,
} from "react-icons/fa6";
import profile1 from "../images/profileImage1.jpg";
import profile2 from "../images/profileImage2.jpg";
import profile3 from "../images/profileImage3.jpg";
import { selectProfileImages, addImage } from "../store/slices/profileSlice";
import { useSelector, useDispatch } from "react-redux";

function ProfileGeneral() {
  const dispatch = useDispatch();

  const profileImages = useSelector(selectProfileImages);

  const addPhoto = () => {
    dispatch(
      addImage(
        "https://www.creativefabrica.com/wp-content/uploads/2023/02/14/Big-Fat-Cat-61228835-1.png"
      )
    );
  };

  const displayImages = profileImages.map((image, index) => (
    <button key={index} className="profile__photo-button">
      <img
        src={image}
        alt="cat as a placeholder for profile"
        className="profile__photo"
      />
    </button>
  ));
  return (
    <div className="profile__general-box">
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
              quidem vitae officiis et voluptatum. Aliquam quibusdam dignissimos
              ad placeat voluptas?
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
              quidem vitae officiis et voluptatum. Aliquam quibusdam dignissimos
              ad placeat voluptas?
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
              quidem vitae officiis et voluptatum. Aliquam quibusdam dignissimos
              ad placeat voluptas?
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
        <button className="profile__add-photo" onClick={addPhoto}>
          <FaPlus className="profile__add-photo-icon" />
        </button>
        {displayImages}
      </div>
    </div>
  );
}

export default ProfileGeneral;
