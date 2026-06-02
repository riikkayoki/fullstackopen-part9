import { useState } from "react";
import {
  Box,
  Chip,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

import { Diagnosis } from "../types";

interface Props {
  selected: Array<string>;
  diagnoses: Array<Diagnosis>;
  onChange: (codes: Array<string>) => void;
}

const DiagnosisSelect = ({ selected, diagnoses, onChange }: Props) => {
  const [open, setOpen] = useState(false);

  const handleChange = (event: SelectChangeEvent<Array<string>>) => {
    const value = event.target.value;
    onChange(Array.isArray(value) ? value : value.split(","));
    setOpen(false);
  };

  return (
    <>
      <InputLabel sx={{ marginTop: 1 }}>Diagnosis codes</InputLabel>
      <Select
        multiple
        fullWidth
        value={selected}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        onChange={handleChange}
        renderValue={(codes) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {codes.map((code) => (
              <Chip key={code} label={code} />
            ))}
          </Box>
        )}
      >
        {diagnoses.map((diagnosis) => (
          <MenuItem key={diagnosis.code} value={diagnosis.code}>
            {diagnosis.code} {diagnosis.name}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default DiagnosisSelect;
