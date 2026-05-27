import express, { type Request, type Response } from 'express';
import patientService from '../services/patientService.ts';
import { parseNewPatient, zodErrorHandler } from '../middleware.ts';
import type { NewPatient, Patient } from '../types.ts';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientService.getPatientEntries());
});

router.post('/', parseNewPatient, (req: Request<unknown, unknown, NewPatient>, res: Response<Patient>) => {
  const addedPatient = patientService.addPatient(req.body);
  res.json(addedPatient);
});

router.use(zodErrorHandler);

export default router;
