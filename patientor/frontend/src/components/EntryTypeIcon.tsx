import { ReactElement } from "react";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import WorkIcon from "@mui/icons-material/Work";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";

import { Entry } from "../types";

interface Props {
  entry: Entry;
}

const EntryTypeIcon = ({ entry }: Props): ReactElement => {
  switch (entry.type) {
    case "Hospital":
      return <LocalHospitalIcon aria-label="hospital" />;
    case "OccupationalHealthcare":
      return <WorkIcon aria-label="occupational healthcare" />;
    case "HealthCheck":
      return <MedicalServicesIcon aria-label="health check" />;
  }
};

export default EntryTypeIcon;
