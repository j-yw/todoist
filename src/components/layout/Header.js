import React, { useState } from "react";
import { FaPizzaSlice } from "react-icons/fa";
import AddTask from "../AddTask";

function Header({ darkMode, setDarkMode }) {
  const [shouldShowMain, setShouldShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);

  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="Todoist" />
        </div>
        <div className="settings">
          <ul>
            <li
              data-testid="quick-add-task-action"
              aria-label="Quick Add Task"
              className="settings__add"
              onClick={() => {
                setShowQuickAddTask(true);
                setShouldShowMain(true);
              }}
              onKeyDown={() => {
                setShowQuickAddTask(true);
                setShouldShowMain(true);
              }}
              tabIndex="0"
              role="button"
            >
              +
            </li>
            <li
              data-testid="dark-mode-action"
              className="settings__dark-mode"
              aria-label="DarkMode on/off"
              onClick={() => {
                setDarkMode(!darkMode);
              }}
              onKeyDown={() => {
                setDarkMode(!darkMode);
              }}
              tabIndex="0"
              role="button"
            >
              <FaPizzaSlice />
            </li>
          </ul>
        </div>
      </nav>
      <AddTask
        showAddTaskMain={false}
        shouldShowMain={shouldShowMain}
        showQuickAddTask={showQuickAddTask}
        setShowQuickAddTask={setShowQuickAddTask}
      />
    </header>
  );
}

export default Header;
