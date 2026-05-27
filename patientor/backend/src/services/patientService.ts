import patients from '../../data/patients.ts';
import type { Patient } from '../types.ts';

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

export default {
  getPatientEntries,
};
