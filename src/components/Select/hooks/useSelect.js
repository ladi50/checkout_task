import { useState } from "react";

export const useSelect = ({ onChange }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);

    onChange && onChange(event.target.value);
  };

  return { value, handleChange };
};
