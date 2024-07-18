import "./App.css";
import SelectComponent from "./components/select/select";
import InputComponent from "./components/input/input";
import Options from "./components/select/options";

const optionsCategory = [
  { value: "movie", label: "Movie" },
  { value: "books", label: "Books" },
  { value: "scince", label: "Scince" },
];
const optionsDifficulty = [
  { value: "light", label: "Light" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" },
];
const optionsType = [
  { value: "true_or_false", label: "True of false" },
  { value: "facts", label: "Facts" },
  { value: "open_unswers", label: "Open unswers" },
];
const optionsTime = [
  { value: "1m", label: "1m" },
  { value: "2m", label: "2m" },
  { value: "5m", label: "5m" },
];

function App() {
  return (
    <>
      <SelectComponent options={optionsCategory}></SelectComponent>
      <SelectComponent options={optionsDifficulty}></SelectComponent>
      <SelectComponent options={optionsType}></SelectComponent>
      <SelectComponent options={optionsTime}></SelectComponent>
      <InputComponent></InputComponent>
    </>
  );
}

export default App;
