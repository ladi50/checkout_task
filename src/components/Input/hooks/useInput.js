import { useState, useEffect } from "react";

import { keepOnlyDigits, keepOnlyDigitsAndSlash } from "utils/validations";

export const useInput = ({ onChange, inputValidation = null, clearInput }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (clearInput) {
      setValue("");
      onChange && onChange("");
    }
  }, [clearInput]);

  const handleKeyDown = (event) => {
    switch (inputValidation) {
      case "exp":
        const key = event.keyCode || event.charCode;

        let { value } = event.target;

        if (key !== 8 && key !== 46) {
          if (value.length === 2) {
            event.target.value = value + "/";
          }
        }

        if ((key === 8 || key === 46) && value.length === 4) {
          event.target.value = value.slice(0, 3);
        }
        break;
      default:
        break;
    }
  };

  const handleChange = (event) => {
    let { value } = event.target;

    switch (inputValidation) {
      case "digits":
        value = keepOnlyDigits(value);
        break;
      case "exp":
        value = keepOnlyDigitsAndSlash(value);
        break;
      default:
        break;
    }

    setValue(value);

    onChange && onChange(value);
  };

  return { value, handleChange, handleKeyDown };
};
