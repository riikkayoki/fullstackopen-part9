import { InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

export interface SelectOption<T> {
  value: T;
  label: string;
}

interface Props<T> {
  label: string;
  value: T;
  options: Array<SelectOption<T>>;
  onChange: (value: T) => void;
}

const SelectInput = <T extends string | number>({
  label,
  value,
  options,
  onChange,
}: Props<T>) => {
  const handleChange = (event: SelectChangeEvent<T>) => {
    const selected = options.find(
      (option) => String(option.value) === String(event.target.value)
    );
    if (selected) {
      onChange(selected.value);
    }
  };

  return (
    <>
      <InputLabel sx={{ marginTop: 1 }}>{label}</InputLabel>
      <Select label={label} fullWidth value={value} onChange={handleChange}>
        {options.map((option) => (
          <MenuItem key={String(option.value)} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default SelectInput;
