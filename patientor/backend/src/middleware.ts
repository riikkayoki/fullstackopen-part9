import { type Request, type Response, type NextFunction } from 'express';
import { z } from 'zod';
import { NewPatientSchema, NewEntrySchema } from './types.ts';

const parseBody = (schema: z.ZodType) => (req: Request, _res: Response, next: NextFunction) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error: unknown) {
    next(error);
  }
};

export const parseNewPatient = parseBody(NewPatientSchema);

export const parseNewEntry = parseBody(NewEntrySchema);

export const zodErrorHandler = (error: unknown, _req: Request, res: Response, next: NextFunction) => {
  if (error instanceof z.ZodError) {
    const message = error.issues
      .map(issue => `${issue.path.join('.')}: ${issue.message}`)
      .join('; ');
    res.status(400).send(`Something went wrong. Error: ${message}`);
  } else {
    next(error);
  }
};
