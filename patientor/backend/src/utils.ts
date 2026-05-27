import { Gender, type NewPatient } from './types.ts';


export const parsePatientData = (object: unknown): NewPatient => {
  if (!object || typeof object !== 'object') {
    throw new Error('Incorrect or missing data');
  }

  if (hasAllPatientFields(object)) {
    return {
      name: parseString(object.name, 'name'),
      dateOfBirth: parseDate(object.dateOfBirth),
      ssn: parseString(object.ssn, 'ssn'),
      gender: parseGender(object.gender),
      occupation: parseString(object.occupation, 'occupation'),
    };
  }

  throw new Error('Incorrect data: some fields are missing');
};


const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const isDateString = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const isGender = (param: string): param is Gender => {
  return Object.values(Gender).map(String).includes(param);
};

const parseString = (value: unknown, fieldName: string): string => {
  if (!value || !isString(value)) {
    throw new Error(`Incorrect or missing ${fieldName}`);
  }
  return value;
};

const parseDate = (date: unknown): string => {
  if (!isString(date) || !isDateString(date)) {
    throw new Error(`Incorrect or missing date of birth: ${String(date)}`);
  }
  return date;
};

const parseGender = (gender: unknown): Gender => {
  if (!isString(gender) || !isGender(gender)) {
    throw new Error(`Incorrect or missing gender: ${String(gender)}`);
  }
  return gender;
};

const hasAllPatientFields = (object: unknown): object is NewPatient => {
  return typeof object === 'object' && object !== null && 'name' in object && 'dateOfBirth' in object && 'ssn' in object && 'gender' in object && 'occupation' in object;
};
