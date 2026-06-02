import { HealthCheckRating } from "../../types";
import SelectInput, { SelectOption } from "../SelectInput";

const ratingOptions: Array<SelectOption<HealthCheckRating>> = [
  { value: HealthCheckRating.Healthy, label: "0 — Healthy" },
  { value: HealthCheckRating.LowRisk, label: "1 — Low Risk" },
  { value: HealthCheckRating.HighRisk, label: "2 — High Risk" },
  { value: HealthCheckRating.CriticalRisk, label: "3 — Critical Risk" },
];

interface Props {
  rating: HealthCheckRating;
  onChange: (rating: HealthCheckRating) => void;
}

const HealthCheckFields = ({ rating, onChange }: Props) => (
  <SelectInput
    label="Healthcheck rating"
    value={rating}
    options={ratingOptions}
    onChange={onChange}
  />
);

export default HealthCheckFields;
