import React from "react";
import moment from "moment";
import { FaSpaceShuttle, FaSun, FaRegPaperPlane } from "react-icons/fa";

function TaskDate({ setTaskDate, showTaskDate, setShowTaskDate }) {
  return (
    showTaskDate && (
      <div className="task-date" data-testid="task-date-overlay">
        <ul className="task-date__list">
          <li
            onClick={() => {
              setShowTaskDate(false);
              setTaskDate(moment().format("DD/MM/YYYY"));
            }}
            onKeyDown={() => {
              setShowTaskDate(false);
              setTaskDate(moment().format("DD/MM/YYYY"));
            }}
            role="button"
            tabIndex="0"
            data-testid="task-date-overlay"
            aria-label="Select today as the task date"
          >
            <span>
              <FaSpaceShuttle />
            </span>
            <span>Today</span>
          </li>
          <li
            onClick={() => {
              setShowTaskDate(false);
              setTaskDate(moment().add(1, "day").format("DD/MM/YYYY"));
            }}
            onKeyDown={() => {
              setShowTaskDate(false);
              setTaskDate(moment().add(1, "day").format("DD/MM/YYYY"));
            }}
            role="button"
            tabIndex="0"
            data-testid="task-date-tomorrow"
            aria-label="Select tomorrow as the task date"
          >
            <span>
              <FaSun />
            </span>
            <span>Tomorrow</span>
          </li>
          <li
            onClick={() => {
              setShowTaskDate(false);
              setTaskDate(moment().add(7, "days").format("DD/MM/YYYY"));
            }}
            onKeyDown={() => {
              setShowTaskDate(false);
              setTaskDate(moment().add(7, "days").format("DD/MM/YYYY"));
            }}
            role="button"
            tabIndex="0"
            data-testid="task-date-next-week"
            aria-label="Select next week as the task date"
          >
            <span>
              <FaRegPaperPlane />
            </span>
            <span>Next Week</span>
          </li>
        </ul>
      </div>
    )
  );
}

export default TaskDate;
