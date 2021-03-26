import React, { useState } from "react";
import { FaRegListAlt, FaRegCalendarAlt } from "react-icons/fa";
import moment from "moment";
// import PropTypes from "prop-types";
import { firebase } from "../firebase";
import { useSelectedProjectValue } from "../context";
import ProjectOverlay from "./ProjectOverlay";
import TaskDate from "./TaskDate";

function AddTask({
  showAddTaskMain = true,
  shouldShowMain = false,
  showQuickAddTask,
  setShowQuickAddTask,
}) {
  const [task, setTask] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [project, setProject] = useState("");
  const [showMain, setShowMain] = useState(shouldShowMain);
  const [showProjectOverlay, setShowProjectOverlay] = useState(false);
  const [showTaskDate, setShowTaskDate] = useState(false);
  const { selectedProject } = useSelectedProjectValue();

  function addTask() {
    const projectId = project || selectedProject;
    let collatedDate = "";

    if (projectId == "TODAY") {
      collatedDate = moment().format("DD/MM/YYYY");
    } else if (projectId == "NEXT_7") {
      collatedDate = moment().add(7, "days").format("DD/MM/YYYY");
    }

    return (
      task &&
      projectId &&
      firebase
        .firestore()
        .collection("tasks")
        .add({
          archived: false,
          projectId: projectId,
          task: task,
          date: collatedDate || taskDate,
          userId: "Afiw25fJshf2*sJ",
        })
        .then(() => {
          setTask("");
          setProject("");
          setShowMain("");
          setShowProjectOverlay(false);
        })
    );
  }

  return (
    <div
      className={showQuickAddTask ? "add-task add-task__overlay" : "add-task"}
      data-testid="add-task-comp"
    >
      {showAddTaskMain && (
        <div
          className="add-task__shallow"
          data-testid="show-main-action"
          onClick={() => {
            setShowMain(!showMain);
          }}
          onKeyDown={() => {
            setShowMain(!showMain);
          }}
          role="button"
          aria-label="Add task"
          tabIndex="0"
        >
          <span className="add-task__plus">+</span>
          <span className="add-task__text">Add Task</span>
        </div>
      )}
      {(showMain || showQuickAddTask) && (
        <div className="add-task__main" data-testid="add-task-main">
          {showQuickAddTask && (
            <>
              <div data-testid="quick-add-task">
                <h2 className="header">Quick Add Task</h2>
                <span
                  className="add-task__cancel-x"
                  aria-label="Cancel adding task"
                  data-testid="add-task-quick-cancel"
                  onClick={() => {
                    setShowMain(false);
                    setShowProjectOverlay(false);
                    setShowQuickAddTask(false);
                  }}
                  onKeyDown={() => {
                    setShowMain(false);
                    setShowProjectOverlay(false);
                    setShowQuickAddTask(false);
                  }}
                  role="button"
                  tabIndex="0"
                >
                  X
                </span>
              </div>
            </>
          )}
          <ProjectOverlay
            setProject={setProject}
            showProjectOverlay={showProjectOverlay}
            setShowProjectOverlay={setShowProjectOverlay}
          />
          <TaskDate
            setTaskDate={setTaskDate}
            showTaskDate={showTaskDate}
            setShowTaskDate={setShowTaskDate}
          />
          <input
            type="text"
            aria-label="Enter your task"
            className="add-task__content"
            data-testid="add-task-content"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
          <button
            className="add-task__submit"
            data-testid="add-task"
            onClick={() => {
              showQuickAddTask
                ? addTask() && setShowQuickAddTask(false)
                : addTask();
            }}
          >
            Add Task
          </button>
          {!showQuickAddTask && (
            <span
              className="add-task__cancel"
              data-testid="add-task-main-cancel"
              aria-label="Cancel adding a task"
              onClick={() => {
                setShowMain(false);
                setShowProjectOverlay(false);
              }}
              onKeyDown={() => {
                setShowMain(false);
                setShowProjectOverlay(false);
              }}
              role="button"
              tabIndex="0"
            >
              Cancel
            </span>
          )}
          <span
            className="add-task__project"
            data-testid="show-project-overlay"
            onClick={() => {
              setShowProjectOverlay(!showProjectOverlay);
            }}
            onKeyDown={() => {
              setShowProjectOverlay(!showProjectOverlay);
            }}
            role="button"
            tabIndex="0"
          >
            <FaRegListAlt />
          </span>
          <span
            className="add-task__date"
            data-testid="show-task-date-overlay"
            onClick={() => {
              setShowTaskDate(!showTaskDate);
            }}
            onKeyDown={() => {
              setShowTaskDate(!showTaskDate);
            }}
            role="button"
            tabIndex="0"
          >
            <FaRegCalendarAlt />
          </span>
        </div>
      )}
    </div>
  );
}

export default AddTask;
