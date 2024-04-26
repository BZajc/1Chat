import React from "react";
import { getAuth } from "firebase/auth";
import profileBg from "../images/profileBackground.jpg";
import ProfileGeneral from "./ProfileGeneral";

function Profile() {
  const auth = getAuth();
  const user = auth.currentUser;

  return (
    <div className="profile">
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

        <ProfileGeneral />
      </div>
    </div>
  );
}

export default Profile;
