import React from "react";
import { firebase } from "../firebase";

function Checkbox({ id, taskDesc }) {
  const archivedTask = () => {
    firebase.firestore().collection("tasks").doc(id).update({
      archived: true,
    });
  };

  return (
    <div
      className="checkbox-holder"
      data-testid="checkbox-action"
      aria-label={`Mark ${taskDesc} as down?`}
      onClick={() => archivedTask()}
      onKeyDown={(e) => {
        if (e.key === "Enter") archivedTask();
      }}
      role="button"
      tabIndex="0"
    >
      <span className="checkbox"></span>
    </div>
  );
}

export default Checkbox;
