import CreatableSelect from "react-select/creatable";

export default function InputComponent() {
  return (
    <label>
      Number of questions (from 5 to 15):
      <br />
      <input name="numberOfQuestions" defaultValue="5" />
    </label>
  );
}
