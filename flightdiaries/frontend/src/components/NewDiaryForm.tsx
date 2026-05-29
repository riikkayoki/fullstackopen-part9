import { useState } from 'react';
import type { JSX, SyntheticEvent } from 'react';
import styled from 'styled-components';
import { NewDiaryEntrySchema, type NewDiaryEntry } from '../types';
import { TextField } from './TextField';

interface NewDiaryFormProps {
  onCreate: (entry: NewDiaryEntry) => void;
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
  const [date, setDate] = useState('');
  const [weather, setWeather] = useState('');
  const [visibility, setVisibility] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    const result = NewDiaryEntrySchema.safeParse({ date, weather, visibility, comment });
    if (!result.success) {
      console.error(result.error.issues);
      return;
    }

    props.onCreate(result.data);
    setDate('');
    setWeather('');
    setVisibility('');
    setComment('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Heading>Add a new entry</Heading>
      <TextField id="date" label="date" value={date} onChange={setDate} />
      <TextField id="visibility" label="visibility" value={visibility} onChange={setVisibility} />
      <TextField id="weather" label="weather" value={weather} onChange={setWeather} />
      <TextField id="comment" label="comment" value={comment} onChange={setComment} />
      <SubmitButton type="submit">add</SubmitButton>
    </Form>
  );
};
