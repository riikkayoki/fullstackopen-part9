import { useState } from 'react';
import type { JSX, SyntheticEvent } from 'react';
import styled from 'styled-components';
import { WeatherSchema, VisibilitySchema } from '../types';
import type { Weather, Visibility } from '../types';
import { useField } from '../hooks/useField';
import { TextField } from './TextField';
import { RadioGroup } from './RadioGroup';

export interface NewDiaryEntryProps {
  date: string;
  weather: Weather | null;
  visibility: Visibility | null;
  comment: string;
}

interface NewDiaryFormProps {
  onCreate: (fields: NewDiaryEntryProps) => Promise<boolean>;
}

const Heading = styled.h2`
  color: navy;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
`;

const SubmitButton = styled.button`
  align-self: flex-start;
`;

export const NewDiaryForm = (props: NewDiaryFormProps): JSX.Element => {
  const date = useField();
  const [weather, setWeather] = useState<Weather | null>(null);
  const [visibility, setVisibility] = useState<Visibility | null>(null);
  const comment = useField();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    const submit = async () => {
      const created = await props.onCreate({
        date: date.value,
        weather,
        visibility,
        comment: comment.value,
      });
      if (created) {
        date.reset();
        setWeather(null);
        setVisibility(null);
        comment.reset();
      }
    };
    submit().catch((error: Error) => console.error(error.message));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Heading>Add a new entry</Heading>
      <TextField id="date" label="date" type="date" value={date.value} onChange={date.onChange} />
      <RadioGroup<Visibility>
        label="visibility"
        name="visibility"
        options={VisibilitySchema.options}
        value={visibility}
        onChange={setVisibility}
      />
      <RadioGroup<Weather>
        label="weather"
        name="weather"
        options={WeatherSchema.options}
        value={weather}
        onChange={setWeather}
      />
      <TextField id="comment" label="comment" value={comment.value} onChange={comment.onChange} type="text" />
      <SubmitButton type="submit">add</SubmitButton>
    </Form>
  );
};
