import express, { type Request, type Response } from 'express';
import patientService from '../services/patientService.ts';
import type { NewPatient, Patient } from '../types.ts';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientService.getPatientEntries());
});

router.post('/', (req: Request<unknown, unknown, NewPatient>, res: Response<Patient>) => {
  const addedPatient = patientService.addPatient(req.body);
  res.json(addedPatient);
});

export default router;
