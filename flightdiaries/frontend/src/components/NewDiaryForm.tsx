import type { JSX, SyntheticEvent } from 'react';
import styled from 'styled-components';
import type { NewDiaryEntryFields } from '../services/diaryService';
import { useField } from '../hooks/useField';
import { TextField } from './TextField';

interface NewDiaryFormProps {
  onCreate: (fields: NewDiaryEntryFields) => Promise<boolean>;
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
  const weather = useField();
  const visibility = useField();
  const comment = useField();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    const submit = async () => {
      const created = await props.onCreate({
        date: date.value,
        weather: weather.value,
        visibility: visibility.value,
        comment: comment.value,
      });
      if (created) {
        date.reset();
        weather.reset();
        visibility.reset();
        comment.reset();
      }
    };
    submit().catch((error: Error) => console.error(error.message));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Heading>Add a new entry</Heading>
      <TextField id="date" label="date" value={date.value} onChange={date.onChange} />
      <TextField id="visibility" label="visibility" value={visibility.value} onChange={visibility.onChange} />
      <TextField id="weather" label="weather" value={weather.value} onChange={weather.onChange} />
      <TextField id="comment" label="comment" value={comment.value} onChange={comment.onChange} />
      <SubmitButton type="submit">add</SubmitButton>
    </Form>
  );
};
