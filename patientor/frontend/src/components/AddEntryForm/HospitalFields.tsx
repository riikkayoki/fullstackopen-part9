import { TextField } from "@mui/material";

import DateField from "../DateField";

export interface HospitalValues {
  dischargeDate: string;
  dischargeCriteria: string;
}

interface Props {
  values: HospitalValues;
  onChange: (values: HospitalValues) => void;
}

const HospitalFields = ({ values, onChange }: Props) => (
  <>
    <DateField
      label="Discharge date"
      value={values.dischargeDate}
      onChange={(value) => onChange({ ...values, dischargeDate: value })}
    />
    <TextField
      label="Discharge criteria"
      fullWidth
      value={values.dischargeCriteria}
      onChange={({ target }) =>
        onChange({ ...values, dischargeCriteria: target.value })
      }
    />
  </>
);

export default HospitalFields;
