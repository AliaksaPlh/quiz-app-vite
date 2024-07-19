import CreatableSelect from "react-select/creatable";
import "./input.component.scss";

export default function InputComponent(props) {
  return (
    <>
      <label>
        {props.label}
        <br />
        <input name={props.name} defaultValue={props.defaultValue} />
      </label>
    </>
  );
}
