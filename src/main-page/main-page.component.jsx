import React from "react";
import SelectComponent from "../components/select/select.component";
import InputComponent from "../components/input/input.component";
import { options } from "../const/options.const";
import ButtonComponent from "../components/buttons/button.component";

export default function MainPageComponent() {
  return (
    <div>
      <SelectComponent options={options.category}></SelectComponent>
      <SelectComponent options={options.difficulty}></SelectComponent>
      <SelectComponent options={options.type}></SelectComponent>
      <SelectComponent options={options.time}></SelectComponent>
      <InputComponent
        label="Number of questions (from 5 to 15):"
        name="numberOfQuestions"
        defaultValue="5"
      ></InputComponent>
      <ButtonComponent label="Start quiz" />
      <ButtonComponent label="See my stats" />
    </div>
  );
}
