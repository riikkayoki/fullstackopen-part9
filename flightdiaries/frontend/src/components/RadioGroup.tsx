import type { JSX } from 'react';
import styled from 'styled-components';

interface RadioGroupProps<T extends string> {
  label: string;
  name: string;
  options: ReadonlyArray<T>;
  value: T | null;
  onChange: (value: T) => void;
}

const Group = styled.div`
  display: flex;
  gap: 16px;
`;

const GroupLabel = styled.span`
  width: 96px;
`;

const Option = styled.label`
  display: flex;
  gap: 4px;
`;

const Radio = styled.input`
  margin: 0;
`;

export const RadioGroup = <T extends string>(props: RadioGroupProps<T>): JSX.Element => {
  const labelId = `${props.name}-label`;

  return (
    <Group role="group" aria-labelledby={labelId}>
      <GroupLabel id={labelId}>{props.label}</GroupLabel>
      {props.options.map((option) => (
        <Option key={option}>
          <Radio
            type="radio"
            name={props.name}
            value={option}
            checked={props.value === option}
            onChange={() => props.onChange(option)}
          />
          {option}
        </Option>
      ))}
    </Group>
  );
};
