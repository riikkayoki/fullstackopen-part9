import { TextField } from "@mui/material";

import DateField from "../DateField";

export interface OccupationalHealthcareValues {
  employerName: string;
  sickLeaveStart: string;
  sickLeaveEnd: string;
}

interface Props {
  values: OccupationalHealthcareValues;
  onChange: (values: OccupationalHealthcareValues) => void;
}

const OccupationalHealthcareFields = ({ values, onChange }: Props) => (
  <>
    <TextField
      label="Employer name"
      fullWidth
      value={values.employerName}
      onChange={({ target }) =>
        onChange({ ...values, employerName: target.value })
      }
    />
    <DateField
      label="Sick leave start"
      value={values.sickLeaveStart}
      onChange={(value) => onChange({ ...values, sickLeaveStart: value })}
    />
    <DateField
      label="Sick leave end"
      value={values.sickLeaveEnd}
      onChange={(value) => onChange({ ...values, sickLeaveEnd: value })}
    />
  </>
);

export default OccupationalHealthcareFields;
