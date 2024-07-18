import CreatableSelect from "react-select/creatable";

export default function InputComponent(props) {
  return (
    <label>
      {props.label}
      <br />
      <input name={props.name} defaultValue={props.defaultValue} />
    </label>
  );
}
