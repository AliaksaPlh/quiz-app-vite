import React from "react";
import ButtonComponent from "../../buttons/button.component";
import "./true-false-buttons.scss";

export default function TrueFalseButtons() {
  return (
    <div className="trye-false-buttons">
      <ButtonComponent label="True" />
      <ButtonComponent label="False" />
    </div>
  );
}
