import { v1 as uuid } from 'uuid';
import patients from '../../data/patients.ts';
import type { NewPatient, Patient } from '../types.ts';

type PatientWithoutSSN = Pick<Patient, 'id' | 'name' | 'dateOfBirth' | 'gender' | 'occupation'>;

const getPatientEntries = (): Array<PatientWithoutSSN> => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatient = (entry: NewPatient): Patient => {
  const newPatient: Patient = {
    id: uuid(),
    ...entry,
  };
  patients.push(newPatient);
  return newPatient;
};

export default {
  getPatientEntries,
  addPatient,
};
