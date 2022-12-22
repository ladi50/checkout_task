import React from "react";
import { Checkbox as MUICheckbox } from "@mui/material";

import { useCheckbox } from "./hooks/useCheckbox";

import "./Checkbox.scss";

const Checkbox = ({ label, onChange }) => {
  const { checked, handleChange } = useCheckbox({ onChange });

  return (
    <div className="checkbox__wrapper">
      <MUICheckbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />

      {label && <div>{label}</div>}
    </div>
  );
};

export default Checkbox;
