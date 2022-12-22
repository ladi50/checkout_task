import React from "react";
import TextField from "@mui/material/TextField";

import { useInput } from "./hooks/useInput";

import FieldError from "components/FieldError/FieldError";

const Input = ({
  id,
  error,
  onChange,
  label,
  type = "string",
  inputValidation,
  maxLength,
  clearInput,
  ...props
}) => {
  const { value, handleChange, handleKeyDown } = useInput({
    onChange,
    inputValidation,
    clearInput
  });

  return (
    <div className="input">
      <TextField
        id={id}
        type={type}
        label={label}
        variant="outlined"
        error={!!error}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        inputProps={{ maxLength }}
        {...props}
      />

      {error && <FieldError error={error} />}
    </div>
  );
};

export default Input;
