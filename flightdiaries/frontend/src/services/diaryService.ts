import axios from 'axios';
import { z } from 'zod';
import { DiaryEntrySchema, type DiaryEntry } from '../types';

const baseUrl = 'http://localhost:3000/api/diaries';

export const getAllDiaries = async (): Promise<Array<DiaryEntry>> => {
  const response = await axios.get(baseUrl);
  return z.array(DiaryEntrySchema).parse(response.data);
};
