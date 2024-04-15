import React from "react";
function Dashboard() {

  return (
    <div className="dashboard">
      <div className="dashboard__box">
        <h2 className="dashboard__h2">Dashboard</h2>
        <h2 className="dashboard__h2-subtext">
          Here you can check your latest activity and other data
        </h2>
        <ul className="dashboard__ul">
          <li className="dashboard__item">
            <div className="dashboard__title-box">Chat Activity</div>

          </li>
          <li className="dashboard__item">
            <div className="dashboard__title-box">Security</div>

          </li>
          <li className="dashboard__item">
            <div className="dashboard__title-box">Chat Quality</div>

          </li>
          <li className="dashboard__item">
            <div className="dashboard__title-box">Your Preferences</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
