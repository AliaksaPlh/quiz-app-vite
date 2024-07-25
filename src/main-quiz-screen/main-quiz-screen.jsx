import React, { useState } from "react";
import ButtonComponent from "../components/buttons/button.component";
import ProgressBar from "../components/progress-bar/progress-bar";
import QuestionText from "../components/question-text/question-text";
import GroupOf4Buttons from "../components/unswer-button/group-of4-buttons/group-of4-buttons";
import TrueFalseButtons from "../components/unswer-button/true-false-buttons/true-false-buttons";
import "./main-quiz-screen.scss";

export default function MainQuizScreen() {
  const [isActive, setActive] = useState("false");
  function ToggleClass() {
    setActive(!isActive);
  }
  return (
    <div className={isActive ? "main-quiz-screen" : "main-quiz-screen-none"}>
      <h1>MainQuizScreen</h1>
      <QuestionText text="Lorem ipsum question?" />
      <TrueFalseButtons />
      <GroupOf4Buttons />
      <ProgressBar />
      <ButtonComponent label="End quiz" />
    </div>
  );
}
