import { useEffect, useState } from 'react';
import type { DiaryEntry, NewDiaryEntry } from '../types';
import { getAllDiaries, createDiary } from '../services/diaryService';

interface UseDiaries {
  diaries: Array<DiaryEntry>;
  addDiary: (entry: NewDiaryEntry) => Promise<DiaryEntry>;
}

export const useDiaries = (): UseDiaries => {
  const [diaries, setDiaries] = useState<Array<DiaryEntry>>([]);

  useEffect(() => {
    const fetchDiaries = async () => {
      const data = await getAllDiaries();
      setDiaries(data);
    };
    fetchDiaries().catch((error: Error) => console.error(error.message));
  }, []);

  const addDiary = async (entry: NewDiaryEntry): Promise<DiaryEntry> => {
    const created = await createDiary(entry);
    setDiaries((current) => current.concat(created));
    return created;
  };

  return { diaries, addDiary };
};
