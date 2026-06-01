import styled from "styled-components";

import { Diagnosis } from "../types";

const CodeList = styled.ul`
  margin: 8px 0 0;
`;

interface Props {
  codes: Array<Diagnosis["code"]>;
  diagnoses: Array<Diagnosis>;
}

const DiagnosisCodes = ({ codes, diagnoses }: Props) => {
  return (
    <CodeList>
      {codes.map((code) => {
        const diagnosis = diagnoses.find((option) => option.code === code);
        return (
          <li key={code}>
            {code} {diagnosis?.name}
          </li>
        );
      })}
    </CodeList>
  );
};

export default DiagnosisCodes;
