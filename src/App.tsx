import "./App.css";
import SelectComponent from "./components/select/select";
import InputComponent from "./components/input/input";
import { options } from "./components/select/options";
import ButtonComponent from "./components/buttons/button";

function App() {
  return (
    <>
      <SelectComponent options={options.category}></SelectComponent>
      <SelectComponent options={options.difficulty}></SelectComponent>
      <SelectComponent options={options.type}></SelectComponent>
      <SelectComponent options={options.time}></SelectComponent>
      <InputComponent></InputComponent>
      <ButtonComponent label="Start quiz" />
      <ButtonComponent label="See my stats" />
    </>
  );
}

export default App;
