import * as React from "react";
import Button from "@mui/material/Button";

export default function ButtonComponent(props) {
  return (
    <div>
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
