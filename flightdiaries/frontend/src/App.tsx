import type { JSX } from 'react';
import styled from 'styled-components';
import { NewDiaryEntrySchema } from './types';
import { useDiaries } from './hooks/useDiaries';
import { useNotification } from './hooks/useNotification';
import { DiaryList } from './components/DiaryList';
import { NewDiaryForm } from './components/NewDiaryForm';
import type { NewDiaryEntryProps } from './components/NewDiaryForm';
import { Notification } from './components/Notification';

const Container = styled.div`
  font-family: sans-serif;
  padding: 16px;
`;

const Title = styled.h1`
  color: navy;
`;

const App = (): JSX.Element => {
  const { diaries, addDiary } = useDiaries();
  const { notification, notify } = useNotification();

  const handleCreate = async (draft: NewDiaryEntryProps): Promise<boolean> => {
    const parsed = NewDiaryEntrySchema.safeParse(draft);
    if (!parsed.success) {
      notify(parsed.error.issues.map((issue) => issue.message).join(', '));
      return false;
    }

    try {
      await addDiary(parsed.data);
      return true;
    } catch (error) {
      if (error instanceof Error) {
        notify(error.message);
      }
      return false;
    }
  };

  return (
    <Container>
      <Title>Diary entries</Title>
      <Notification message={notification} />
      <NewDiaryForm onCreate={handleCreate} />
      <DiaryList entries={diaries} />
    </Container>
  );
};

export default App;
