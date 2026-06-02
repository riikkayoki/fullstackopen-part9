import { TextField } from "@mui/material";

interface Props {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const DateField = ({ label, value, onChange }: Props) => (
  <TextField
    label={label}
    type="date"
    fullWidth
    slotProps={{ inputLabel: { shrink: true } }}
    value={value}
    onChange={({ target }) => onChange(target.value)}
  />
);

export default DateField;
