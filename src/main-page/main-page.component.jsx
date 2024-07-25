import React, { useState } from "react";
import SelectComponent from "../components/select/select.component";
import InputComponent from "../components/input/input.component";
import { options } from "../const/options.const";
import ButtonComponent from "../components/buttons/button.component";
import "./main-page.component.scss";
import MainQuizScreen from "../main-quiz-screen/main-quiz-screen";

export default function MainPageComponent() {
  const [isActive, setActive] = useState("false");
  function ToggleClass() {
    setActive(!isActive);
  }

  // function show() {
  //   return { MainQuizScreen };
  // }

  return (
    <>
      <div className={isActive ? "start-quiz-frame" : "start-quiz-frame-none"}>
        <h1>
          <span>Quiz</span>
        </h1>
        <div className="selectComponent">
          <SelectComponent options={options.category}></SelectComponent>
          <SelectComponent options={options.difficulty}></SelectComponent>
          <SelectComponent options={options.type}></SelectComponent>
          <SelectComponent options={options.time}></SelectComponent>
        </div>
        <div className="inputComponent">
          <InputComponent
            label="Number of questions 
          (from 5 to 15):  "
            name="numberOfQuestions"
            defaultValue="5"
          ></InputComponent>
        </div>
        <div className="buttonComponent">
          <ButtonComponent label="Start quiz" action={ToggleClass} />
          <ButtonComponent label="See my stats" />
        </div>
      </div>
    </>
  );
}
