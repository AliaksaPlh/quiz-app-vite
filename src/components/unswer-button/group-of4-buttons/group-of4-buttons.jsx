import React from "react";
import ButtonComponent from "../../buttons/button.component";
import "./group-of4-buttons.scss";

export default function GroupOf4Buttons() {
  return (
    <div className="group-of4-buttons">
      <ButtonComponent label="some value" />
      <ButtonComponent label="some value" />
      <ButtonComponent label="some value" />
      <ButtonComponent label="some value" />
    </div>
  );
}
