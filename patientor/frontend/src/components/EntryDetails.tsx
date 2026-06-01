import styled from "styled-components";

import { Diagnosis, Entry } from "../types";
import EntryTypeDetails from "./EntryTypeDetails";
import EntryTypeIcon from "./EntryTypeIcon";
import DiagnosisCodes from "./DiagnosisCodes";

const EntryBox = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 12px 16px;
  margin: 12px 0;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const EntryDate = styled.p`
  margin: 0 0 4px;
  font-weight: 600;
`;

const Description = styled.p`
  margin: 4px 0;
`;

const Specialist = styled.p`
  margin: 8px 0 0;
`;

interface Props {
  entry: Entry;
  diagnoses: Array<Diagnosis>;
}

const EntryDetails = ({ entry, diagnoses }: Props) => (
  <EntryBox>
    <Header>
      <EntryDate>{entry.date}</EntryDate>
      <EntryTypeIcon entry={entry} />
    </Header>
    <Description>{entry.description}</Description>
    <EntryTypeDetails entry={entry} />
    {entry.diagnosisCodes && (
      <DiagnosisCodes codes={entry.diagnosisCodes} diagnoses={diagnoses} />
    )}
    <Specialist>diagnose by {entry.specialist}</Specialist>
  </EntryBox>
);

export default EntryDetails;
