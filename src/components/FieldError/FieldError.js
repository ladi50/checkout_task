import React from "react";
import { FormHelperText } from "@mui/material";

import "./FieldError.scss";

const FieldError = ({ error }) => {
  return <FormHelperText className="fieldError">{error}</FormHelperText>;
};

export default FieldError;
