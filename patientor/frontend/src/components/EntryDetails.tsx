import styled from "styled-components";

import { Entry } from "../types";

const EntryBox = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 12px 16px;
  margin: 8px 0;
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
}

const EntryDetails = ({ entry }: Props) => (
  <EntryBox>
    <EntryDate>{entry.date}</EntryDate>
    <Description>{entry.description}</Description>
    {entry.diagnosisCodes && entry.diagnosisCodes.length > 0 && (
      <CodeList>
        {entry.diagnosisCodes.map((code) => (
          <li key={code}>{code}</li>
        ))}
      </CodeList>
    )}
  </EntryBox>
);

export default EntryDetails;
