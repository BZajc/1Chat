import React from "react";

function ToDo() {
  return (
    <div className="todo">
      <div className="todo__box">
        <h2 className="todo__h2">To Do List</h2>
        <p className="todo__sub-h2-text">
          Future additions will be displayed here
        </p>
        <h3 className="todo__h3">Main</h3>
        <ul className="todo__list">
          <li className="todo__item">
            Fixing account creation. Currently, there is a bug that creates an
            account even if the user did not meet all the conditions during
            registration {"( cannot log in to this account anyway)"}
          </li>
          <li className="todo__item">Improving routing</li>
          <li className="todo__item">Improving code in terms of SEO</li>
          <li className="todo__item">Keeping user logged in</li>
          <li className="todo__item">Loading icon</li>
          <li className="todo__item">Code optimization</li>
          <li className="todo__item">
            Changing email verification from firebase to custom one
          </li>
          <li className="todo__item">
            Improving register form with more detailed data, error validation
            and error displaying when user is not meeting the requirements
          </li>
          <li className="todo__item">Terms of service and privacy policy</li>
          <li className="todo__item">
            Remove unnecessary data being send to the database
          </li>
          <li className="todo__item">
            Improve database security rules
          </li>
          <li className="todo__item">
            Adding additional security measures like reCAPTCHA or phone verification during registration
          </li>
          <li className="todo__item">
            Displaying more info during the chat like user's profile, tags, time of the message etc.
          </li>
          <li className="todo__item">
            Optimization working with the database
          </li>
          <li className="todo__item">
            Opening new menu after clicking on the message in the profile tab to display the chat or set message as a read.
          </li>
          <li className="todo__item">
            Adding new tab to profile tab {"Activity"}
          </li>
        </ul>
        <h3 className="todo__h3">Optional</h3>
        <ul className="todo__list">
          <li className="todo__item">Creating nav for desktop</li>
        </ul>
      </div>
    </div>
  );
}

export default ToDo;
