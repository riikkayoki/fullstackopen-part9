import { useEffect, useState } from 'react';
import type { DiaryEntry } from '../types';
import { getAllDiaries, createDiary, type NewDiaryEntryFields } from '../services/diaryService';

interface UseDiaries {
  diaries: Array<DiaryEntry>;
  addDiary: (fields: NewDiaryEntryFields) => Promise<DiaryEntry>;
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

  const addDiary = async (fields: NewDiaryEntryFields): Promise<DiaryEntry> => {
    const created = await createDiary(fields);
    setDiaries((current) => current.concat(created));
    return created;
  };

  return { diaries, addDiary };
};
