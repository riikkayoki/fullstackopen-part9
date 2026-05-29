import { useEffect, useState } from 'react';
import styled from 'styled-components';
import type { DiaryEntry } from './types';
import { getAllDiaries } from './services/diaryService';
import { DiaryList } from './components/DiaryList';
import type { JSX } from 'react';

const Container = styled.div`
  font-family: sans-serif;
  padding: 1rem;
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

  return (
    <Container>
      <Title>Diary entries</Title>
      <DiaryList entries={diaries} />
    </Container>
  );
};

export default App;
