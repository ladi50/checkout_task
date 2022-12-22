import { useState } from "react";

export const useCheckbox = ({ onChange }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);

    onChange && onChange(event.target.checked);
  };

  return { checked, handleChange };
};
