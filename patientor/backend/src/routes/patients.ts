import express, { type Request, type Response } from 'express';
import patientService from '../services/patientService.ts';
import { parseNewPatient, parseNewEntry, zodErrorHandler } from '../middleware.ts';
import type { NewPatient, NewEntry, NonSensitivePatient, Patient, Entry } from '../types.ts';

const router = express.Router();

router.get('/', (_req, res: Response<Array<NonSensitivePatient>>) => {
  res.send(patientService.getNonSensitivePatients());
});

router.get('/:id', (req, res: Response<Patient>) => {
  const patient = patientService.findById(req.params.id);
  if (patient) {
    res.send(patient);
  } else {
    res.sendStatus(404);
  }
});

router.post('/', parseNewPatient, (req: Request<unknown, unknown, NewPatient>, res: Response<Patient>) => {
  const addedPatient = patientService.addPatient(req.body);
  res.json(addedPatient);
});

router.post('/:id/entries', parseNewEntry, (req: Request<{ id: string }, unknown, NewEntry>, res: Response<Entry>) => {
  const addedEntry = patientService.addEntry(req.params.id, req.body);
  if (addedEntry) {
    res.json(addedEntry);
  } else {
    res.sendStatus(404);
  }
});

router.use(zodErrorHandler);

export default router;
