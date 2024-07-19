import Select from "react-select";
import "./select.component.scss";

export default function SelectComponent(props) {
  return <Select options={props.options} className="selectComponent" />;
}
