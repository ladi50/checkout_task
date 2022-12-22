import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import MUISelect from "@mui/material/Select";

import { useSelect } from "./hooks/useSelect";

import FieldError from "components/FieldError/FieldError";

export default function Select({ data = [], onChange, id, label, error }) {
  const { value, handleChange } = useSelect({ onChange });

  return (
    <Box sx={{ minWidth: 120, width: "100%" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>

        <MUISelect
          labelId="demo-simple-select-label"
          id={id}
          value={value}
          onChange={handleChange}
          label={label}
        >
          {data.map(({ name }, index) => (
            <MenuItem key={index} value={name}>
              {name}
            </MenuItem>
          ))}
        </MUISelect>

        {error && <FieldError error={error} />}
      </FormControl>
    </Box>
  );
}
