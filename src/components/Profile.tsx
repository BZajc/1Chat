import React from "react";
import { getAuth } from "firebase/auth";
import { FaChartLine } from "react-icons/fa6";
function Profile() {
  const auth = getAuth();
  const user = auth.currentUser;
  return (
    <div className="profile">
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
        <div className="profile__info-box">
            <div className="profile__info-tile">
                <FaChartLine className="profile__info-icon"/>
                <div className="profile__tile-box">
                    <p className="profile__tile-name">Your score</p>
                    <p className="profile__tile-text">4.7 / 6.0</p>
                </div>
            </div>
            <div className="profile__info-tile">
                <FaChartLine className="profile__info-icon"/>
                <div className="profile__tile-box">
                    <p className="profile__tile-name">Your tags</p>
                    <p className="profile__tile-text">Your activity</p>
                </div>
            </div>
            <div className="profile__info-tile">
                <FaChartLine className="profile__info-icon"/>
                <div className="profile__tile-box profile__tile-box--messages">
                    <p className="profile__tile-name">New messages</p>
                    <p className="profile__tile-text">3 </p>
                </div>
            </div>
            <div className="profile__info-tile">
                <FaChartLine className="profile__info-icon"/>
                <div className="profile__tile-box">
                    <p className="profile__tile-name">Something</p>
                    <p className="profile__tile-text">Idk</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
