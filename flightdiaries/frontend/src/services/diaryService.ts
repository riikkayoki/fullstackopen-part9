import axios from 'axios';
import { z } from 'zod';
import { DiaryEntrySchema, ErrorResponseSchema, type DiaryEntry } from '../types';

export interface NewDiaryEntryFields {
  date: string;
  weather: string;
  visibility: string;
  comment: string;
}

const baseUrl = 'http://localhost:3000/api/diaries';

export const getAllDiaries = async (): Promise<Array<DiaryEntry>> => {
  const response = await axios.get(baseUrl);
  return z.array(DiaryEntrySchema).parse(response.data);
};

export const createDiary = async (fields: NewDiaryEntryFields): Promise<DiaryEntry> => {
  try {
    const response = await axios.post(baseUrl, fields);
    return DiaryEntrySchema.parse(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const parsed = ErrorResponseSchema.safeParse(error.response?.data);
      const message = parsed.success
        ? parsed.data.error.map((issue) => issue.message).join(', ')
        : error.message;
      throw new Error(message, { cause: error });
    }
    throw error;
  }
};
