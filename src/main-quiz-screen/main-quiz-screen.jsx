import React, { useState, useEffect } from "react";
import ButtonComponent from "../components/buttons/button.component";
import ProgressBar from "../components/progress-bar/progress-bar";
import QuestionText from "../components/question-text/question-text";
import GroupOf4Buttons from "../components/unswer-button/group-of4-buttons/group-of4-buttons";
import TrueFalseButtons from "../components/unswer-button/true-false-buttons/true-false-buttons";
import "./main-quiz-screen.scss";

export default function MainQuizScreen() {
  const [timeLeft, settimeLeft] = useState(30); // Start with 30 seconds

  useEffect(() => {
    let intervalId = setInterval(() => {
      if (timeLeft > 0) {
        settimeLeft(timeLeft - 1);
      } else {
        // Time's up for now
        alert("Time's up!");
        clearInterval(intervalId);
      }
    }, 1000);

    // Cleanup the interval when the component off
    return () => clearInterval(intervalId);
  }, [timeLeft]);
  //

  return (
    <div className="main-quiz-screen">
      <h1>MainQuizScreen</h1>
      <QuestionText text="Lorem ipsum question?" />
      <TrueFalseButtons />
      <GroupOf4Buttons />
      <ProgressBar />
      <p>Time left: {timeLeft} seconds</p>
      <ButtonComponent label="End quiz" />
    </div>
  );
}
