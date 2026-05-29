import { z } from 'zod';

export const WeatherSchema = z.enum(['sunny', 'rainy', 'cloudy', 'stormy', 'windy']);

export type Weather = z.infer<typeof WeatherSchema>;

export const VisibilitySchema = z.enum(['great', 'good', 'ok', 'poor']);

export type Visibility = z.infer<typeof VisibilitySchema>;

export const DiaryEntrySchema = z.object({
  id: z.number(),
  date: z.iso.date(),
  weather: WeatherSchema,
  visibility: VisibilitySchema,
});

export type DiaryEntry = z.infer<typeof DiaryEntrySchema>;

export const NewDiaryEntrySchema = z.object({
  date: z.iso.date(),
  weather: WeatherSchema,
  visibility: VisibilitySchema,
  comment: z.string().optional(),
});

export type NewDiaryEntry = z.infer<typeof NewDiaryEntrySchema>;
