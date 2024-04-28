import React from "react";
import { getAuth } from "firebase/auth";
import { FaLock, FaHandPeace, FaHashtag, FaPlane, FaPuzzlePiece, FaRegImage } from "react-icons/fa6";
import { FiActivity } from "react-icons/fi";
function Dashboard() {
  const auth = getAuth();
  const user = auth.currentUser;

  return (
    <div className="dashboard">
      <div className="dashboard__box">
        <div className="dashboard__header-box">
          <h2 className="dashboard__h2">Dashboard</h2>
          <h3 className="dashboard__h2-subtext">
            Here you can check your latest activity and other data
          </h3>
        </div>
        <h3 className="dashboard__box-name">Profile Info</h3>
        <div className="dashboard__profile-box">
          <img
            src={user?.photoURL ?? "https://www.creativefabrica.com/wp-content/uploads/2023/02/14/Big-Fat-Cat-61228835-1.png"}
            alt="user profile"
            className="dashboard__profile-image"
          />
          <div className="dashboard__profile-name">{user?.displayName}</div>
          <div className="dashboard__profile-overlay">Go to Profile tab</div>
        </div>
        <p className="dashboard__box-info">
          Here you can check your profile image or nickname. You can change it
          by clicking on the box above or in the Profile tab
        </p>
        <h3 className="dashboard__box-name">Chat Activity</h3>
        <div className="dashboard__activity-box">
          <ul className="dashboard__activity-list">
            <li className="dashboard__activity-item">
              <p className="dashboard__activity-key">
                Monthly messages:
              </p>
              <p className="dashboard__activity-value">87 295</p>
            </li>
            <li className="dashboard__activity-item">
              <p className="dashboard__activity-key">Average chat lifespan:</p>
              <p className="dashboard__activity-value">9m 47s</p>
            </li>
          </ul>
          <FiActivity className="dashboard__bg-icon" />
        </div>
        <p className="dashboard__box-info">
          Chat Activity data displays your monthly messages and average chat lifespan. This data is updated every month.
        </p>
        <h3 className="dashboard__box-name">Security</h3>
        <div className="dashboard__security-box">
          <ul className="dashboard__security-list">
            <li className="dashboard__security-item">
              <p className="dashboard__security-key">
                Reported users:
              </p>
              <p className="dashboard__security-value">29</p>
            </li>
            <li className="dashboard__security-item">
              <p className="dashboard__security-key">Reports got:</p>
              <p className="dashboard__security-value">11</p>
            </li>
          </ul>
          <FaLock className="dashboard__bg-icon" />
        </div>
        <p className="dashboard__box-info">
          Security data displays the number of reported users and how many times you have been reported for inappropriate behaviour. This data is updated every 24 hours.
        </p>
        <h3 className="dashboard__box-name">Behaviour score</h3>
        <div className="dashboard__behaviour-box">
          <ul className="dashboard__behaviour-list">
            <li className="dashboard__behaviour-item">
              <p className="dashboard__behaviour-key">
                Score:
              </p>
              <p className="dashboard__behaviour-value">4.7 / 6.0</p>
            </li>
          </ul>
          <FaHandPeace className="dashboard__bg-icon" />
        </div>
        <p className="dashboard__box-info">
          Behaviour score display your current score. It is calculated based on your activity, reports and other data eg. if you have been reported for inappropriate behaviour, your score will most likely decrease. Keep it high! This data is updated every 24 hours.
        </p>
        <h3 className="dashboard__box-name">Tags</h3>
        <div className="dashboard__tags-box">
          <ul className="dashboard__tags-list">
            <li className="dashboard__tags-item">
              <div className="dashboard__tag">
                <FaPlane />
              </div>
              <div className="dashboard__tag">
                <FaPuzzlePiece />
              </div>
              <div className="dashboard__tag">
                <FaRegImage />
              </div>
            </li>
          </ul>
          <FaHashtag className="dashboard__bg-icon" />
        </div>
        <p className="dashboard__box-info">
          Tags display your most used tags. It helps other users to know what you like to talk about and improve your queue. Function is not available yet.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
