import diagnoses from '../../data/diagnoses.ts';
import type { Diagnosis } from '../types.ts';

const getEntries = (): Array<Diagnosis> => {
  return diagnoses;
};

export default {
  getEntries,
};
