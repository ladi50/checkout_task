import * as React from "react";
import MUIRadio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function Radio({ item }) {
  return (
    <FormControlLabel
      value={item.value}
      control={<MUIRadio />}
      label={item.label}
    />
  );
}
