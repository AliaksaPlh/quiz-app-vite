import * as React from "react";
import Button from "@mui/material/Button";
import "./button.component.scss";

export default function ButtonComponent(props) {
  return (
    <div className="button-div">
      <Button
        variant="contained"
        onClick={() => {
          alert("clicked");
        }}
      >
        {props.label}
      </Button>
    </div>
  );
}
