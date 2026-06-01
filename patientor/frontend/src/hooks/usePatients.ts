import { useEffect, useState } from "react";

import { Patient, PatientFormValues } from "../types";
import patientService from "../services/patients";

interface UsePatients {
  patients: Array<Patient>;
  addPatient: (values: PatientFormValues) => Promise<Patient>;
}

export const usePatients = (): UsePatients => {
  const [patients, setPatients] = useState<Array<Patient>>([]);

  useEffect(() => {
    const fetchPatientList = async () => {
      const data = await patientService.getAll();
      setPatients(data);
    };

    fetchPatientList().catch((error: unknown) => console.error(error));
  }, []);

  const addPatient = async (values: PatientFormValues): Promise<Patient> => {
    const created = await patientService.create(values);
    setPatients((current) => current.concat(created));
    return created;
  };

  return { patients, addPatient };
};
