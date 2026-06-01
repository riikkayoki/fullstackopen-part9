import { ReactElement } from "react";
import styled from "styled-components";

import { Entry } from "../types";
import HealthRatingBar from "./HealthRatingBar";

const Detail = styled.p`
  margin: 4px 0;
`;

interface Props {
  entry: Entry;
}

const EntryTypeDetails = ({ entry }: Props): ReactElement => {
  switch (entry.type) {
    case "Hospital":
      return (
        <Detail>
          Discharged {entry.discharge.date}: {entry.discharge.criteria}
        </Detail>
      );
    case "OccupationalHealthcare":
      return (
        <>
          <Detail>Employer: {entry.employerName}</Detail>
          {entry.sickLeave && (
            <Detail>
              Sick leave: {entry.sickLeave.startDate} – {entry.sickLeave.endDate}
            </Detail>
          )}
        </>
      );
    case "HealthCheck":
      return <HealthRatingBar showText={false} rating={entry.healthCheckRating} />;
  }
};

export default EntryTypeDetails;
