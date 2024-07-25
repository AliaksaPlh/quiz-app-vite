import React from "react";

export default function ProgressBar() {
  return (
    <div>
      <label for="progress-bar">Question:</label>
      <progress id="progress-bar" max="6" value="3">
        3
      </progress>
    </div>
  );
}
