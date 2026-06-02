import { useState, SyntheticEvent } from "react";
import { TextField, Grid, Button } from "@mui/material";

import { EntryFormValues, Entry, HealthCheckRating, Diagnosis } from "../../types";
import SelectInput, { SelectOption } from "../SelectInput";
import DateField from "../DateField";
import DiagnosisSelect from "../DiagnosisSelect";
import HealthCheckFields from "./HealthCheckFields";
import OccupationalHealthcareFields, {
  OccupationalHealthcareValues,
} from "./OccupationalHealthcareFields";
import HospitalFields, { HospitalValues } from "./HospitalFields";

interface Props {
  diagnoses: Array<Diagnosis>;
  onCancel: () => void;
  onSubmit: (values: EntryFormValues) => void;
}

type EntryType = Entry["type"];

const entryTypeOptions: Array<SelectOption<EntryType>> = [
  { value: "HealthCheck", label: "Health check" },
  { value: "OccupationalHealthcare", label: "Occupational healthcare" },
  { value: "Hospital", label: "Hospital" },
];

const AddEntryForm = ({ diagnoses, onCancel, onSubmit }: Props) => {
  const [type, setType] = useState<EntryType>("HealthCheck");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [diagnosisCodes, setDiagnosisCodes] = useState<Array<string>>([]);

  const [healthCheckRating, setHealthCheckRating] = useState<HealthCheckRating>(
    HealthCheckRating.Healthy
  );
  const [occupational, setOccupational] =
    useState<OccupationalHealthcareValues>({
      employerName: "",
      sickLeaveStart: "",
      sickLeaveEnd: "",
    });
  const [hospital, setHospital] = useState<HospitalValues>({
    dischargeDate: "",
    dischargeCriteria: "",
  });

  const addEntry = (event: SyntheticEvent) => {
    event.preventDefault();
    const baseEntry = {
      description,
      date,
      specialist,
      diagnosisCodes,
    };

    switch (type) {
      case "HealthCheck":
        onSubmit({ ...baseEntry, type, healthCheckRating });
        break;
      case "OccupationalHealthcare":
        onSubmit({
          ...baseEntry,
          type,
          employerName: occupational.employerName,
          sickLeave:
            occupational.sickLeaveStart && occupational.sickLeaveEnd
              ? {
                  startDate: occupational.sickLeaveStart,
                  endDate: occupational.sickLeaveEnd,
                }
              : undefined,
        });
        break;
      case "Hospital":
        onSubmit({
          ...baseEntry,
          type,
          discharge: {
            date: hospital.dischargeDate,
            criteria: hospital.dischargeCriteria,
          },
        });
        break;
    }
  };

  return (
    <form onSubmit={addEntry}>
      <SelectInput
        label="Entry type"
        value={type}
        options={entryTypeOptions}
        onChange={setType}
      />

      <DateField label="Date" value={date} onChange={setDate} />
      <TextField
        label="Description"
        fullWidth
        value={description}
        onChange={({ target }) => setDescription(target.value)}
      />
      <TextField
        label="Specialist"
        fullWidth
        value={specialist}
        onChange={({ target }) => setSpecialist(target.value)}
      />

      {type === "HealthCheck" && (
        <HealthCheckFields
          rating={healthCheckRating}
          onChange={setHealthCheckRating}
        />
      )}
      {type === "OccupationalHealthcare" && (
        <OccupationalHealthcareFields
          values={occupational}
          onChange={setOccupational}
        />
      )}
      {type === "Hospital" && (
        <HospitalFields values={hospital} onChange={setHospital} />
      )}

      <DiagnosisSelect
        selected={diagnosisCodes}
        diagnoses={diagnoses}
        onChange={setDiagnosisCodes}
      />

      <Grid container justifyContent="space-between" sx={{ marginTop: 2 }}>
        <Grid size="auto">
          <Button
            color="secondary"
            variant="contained"
            type="button"
            onClick={onCancel}
          >
            Cancel
          </Button>
        </Grid>
        <Grid size="auto">
          <Button type="submit" variant="contained">
            Add
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddEntryForm;
