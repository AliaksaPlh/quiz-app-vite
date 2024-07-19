import React from "react";
import SelectComponent from "../components/select/select.component";
import InputComponent from "../components/input/input.component";
import { options } from "../const/options.const";
import ButtonComponent from "../components/buttons/button.component";
import "./main-page.component.scss";

export default function MainPageComponent() {
  return (
    <div className="stert-quiz-frame">
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
        <ButtonComponent label="Start quiz" />
        <ButtonComponent label="See my stats" />
      </div>
    </div>
  );
}
