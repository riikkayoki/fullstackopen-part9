import type { JSX } from 'react';
import styled from 'styled-components';

interface TextFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const Field = styled.div`
  display: flex;
  gap: 8px;
`;

const Label = styled.label`
  width: 96px;
`;

const Input = styled.input`
  width: 256px;
`;

export const TextField = (props: TextFieldProps): JSX.Element => {
  return (
    <Field>
      <Label htmlFor={props.id}>{props.label}</Label>
      <Input
        id={props.id}
        value={props.value}
        onChange={(event) => props.onChange(event.target.value)}
      />
    </Field>
  );
};
