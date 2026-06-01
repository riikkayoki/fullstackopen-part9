import styled from "styled-components";

import { Diagnosis, Entry } from "../types";

const EntryBox = styled.div`
  margin: 12px 0;
`;

const EntryDate = styled.p`
  margin: 0 0 4px;
  font-weight: 600;
`;

const Description = styled.p`
  margin: 4px 0;
`;

const CodeList = styled.ul`
  margin: 8px 0 0;
`;

interface Props {
  entry: Entry;
  diagnoses: Array<Diagnosis>;
}

const EntryDetails = ({ entry, diagnoses }: Props) => (
  <EntryBox>
    <EntryDate>{entry.date}</EntryDate>
    <Description>{entry.description}</Description>
    {entry.diagnosisCodes && entry.diagnosisCodes.length > 0 && (
      <CodeList>
        {entry.diagnosisCodes.map((code) => {
          const diagnosis = diagnoses.find((option) => option.code === code);
          return (
            <li key={code}>
              {code} {diagnosis?.name}
            </li>
          );
        })}
      </CodeList>
    )}
  </EntryBox>
);

export default EntryDetails;
