import { v1 as uuid } from 'uuid';
import patients from '../../data/patients.ts';
import type { NewPatient, NonSensitivePatient, Patient } from '../types.ts';

const getNonSensitivePatients = (): Array<NonSensitivePatient> => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const findById = (id: string): Patient | undefined => {
  return patients.find((patient) => patient.id === id);
};

const addPatient = (entry: NewPatient): Patient => {
  const newPatient: Patient = {
    id: uuid(),
    ...entry,
    entries: [],
  };
  patients.push(newPatient);
  return newPatient;
};

export default {
  getNonSensitivePatients,
  findById,
  addPatient,
};
