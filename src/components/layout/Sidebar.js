import React, { useState } from "react";

import {
  FaChevronDown,
  FaInbox,
  FaRegCalendar,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { Projects } from "../Projects";
import { useSelectedProjectValue } from "../../context/selected-project-context";
import AddProject from "../AddProject";

function Sidebar() {
  const { setSelectedProject } = useSelectedProjectValue();
  const [active, setActive] = useState("inbox");
  const [showProjects, setShowProjects] = useState(true);

  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li
          aria-label="Show inbox tasks"
          data-testid="inbox"
          className={active === "inbox" ? "active" : undefined}
          onClick={() => {
            setActive("inbox");
            setSelectedProject("INBOX");
          }}
          onKeyDown={() => {
            setActive("inbox");
            setSelectedProject("INBOX");
          }}
          role="button"
          tabIndex="0"
        >
          <span>
            <FaInbox />
          </span>
          <span>Inbox</span>
        </li>
        <li
          aria-label="Show today tasks"
          data-testid="today"
          className={active === "today" ? "active" : undefined}
          onClick={() => {
            setActive("today");
            setSelectedProject("TODAY");
          }}
          onKeyDown={() => {
            setActive("today");
            setSelectedProject("TODAY");
          }}
          role="button"
          tabIndex="0"
        >
          <span>
            <FaRegCalendar />
          </span>
          <span>Today</span>
        </li>
        <li
          aria-label="Show tasks for the next 7 days"
          data-testid="next_7"
          className={active === "next_7" ? "active" : undefined}
          onClick={() => {
            setActive("next_7");
            setSelectedProject("NEXT_7");
          }}
          onKeyDown={() => {
            setActive("next_7");
            setSelectedProject("NEXT_7");
          }}
          role="button"
          tabIndex="0"
        >
          <span>
            <FaRegCalendarAlt />
          </span>
          <span>Next 7 Days</span>
        </li>
      </ul>
      <div
        className="sidebar__middle"
        aria-label="Show/Hide projects"
        onClick={() => setShowProjects(!showProjects)}
        onKeyDown={() => setShowProjects(!showProjects)}
        role="button"
        tabIndex="0"
      >
        <span>
          <FaChevronDown
            className={!showProjects ? "hidden-projects" : undefined}
          />
        </span>
        <h2>Projects</h2>
      </div>
      <ul className="sidebar__projects">{showProjects && <Projects />}</ul>
      {showProjects && <AddProject />}
    </div>
  );
}

export default Sidebar;
