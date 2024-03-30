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
                <li className="todo__item">Improving routing</li>
                <li className="todo__item">Improving code in terms of SEO</li>
                <li className="todo__item">Keeping user logged in</li>
                <li className="todo__item">
                    Sending more detailed data to server when creating an account
                </li>
                <li className="todo__item">Loading icon</li>
                <li className="todo__item">Code optimization</li>
                <li className="todo__item">Keeping user logged in</li>
            </ul>
            <h3 className="todo__h3">Optional</h3>
            <ul className="todo__list">
                <li className="todo__item">
                    Improving UI with Three.js or Lottie animations
                </li>
                <li className="todo__item">
                    Creating nav for desktop
                </li>
            </ul>
        </div>
    </div>
);
}

export default ToDo;
