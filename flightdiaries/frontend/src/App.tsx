import { useEffect, useState } from 'react';
import styled from 'styled-components';
import type { DiaryEntry, NewDiaryEntry } from './types';
import { getAllDiaries, createDiary } from './services/diaryService';
import { DiaryList } from './components/DiaryList';
import { NewDiaryForm } from './components/NewDiaryForm';
import type { JSX } from 'react';

const Container = styled.div`
  font-family: sans-serif;
  padding: 16px;
`;

const Title = styled.h1`
  color: navy;
`;

const App = (): JSX.Element => {
  const [diaries, setDiaries] = useState<Array<DiaryEntry>>([]);

  useEffect(() => {
    const fetchDiaries = async () => {
      const data = await getAllDiaries();
      setDiaries(data);
    };
    fetchDiaries().catch((error: Error) => console.error(error.message));
  }, []);

  const handleCreate = (entry: NewDiaryEntry) => {
    const create = async () => {
      const created = await createDiary(entry);
      setDiaries((current) => current.concat(created));
    };
    create().catch((error: Error) => console.error(error.message));
  };

  return (
    <Container>
      <Title>Diary entries</Title>
      <NewDiaryForm onCreate={handleCreate} />
      <DiaryList entries={diaries} />
    </Container>
  );
};

export default App;
