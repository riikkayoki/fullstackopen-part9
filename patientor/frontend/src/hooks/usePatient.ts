import { useEffect, useState } from "react";

import { Patient, EntryFormValues } from "../types";
import patientService from "../services/patients";

interface UsePatient {
  patient: Patient | null;
  error: string | null;
  addEntry: (values: EntryFormValues) => Promise<void>;
}

export const usePatient = (id: string | undefined): UsePatient => {
  const [patient, setPatient] = useState<Patient | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchPatient = async () => {
      const data = await patientService.getById(id);
      setPatient(data);
    };

    fetchPatient().catch((e: unknown) => {
      setError(e instanceof Error ? e.message : "Failed to fetch patient");
    });
  }, [id]);

  const addEntry = async (values: EntryFormValues): Promise<void> => {
    if (!id) return;

    const entry = await patientService.addEntry(id, values);
    setPatient((current) =>
      current
        ? { ...current, entries: (current.entries ?? []).concat(entry) }
        : current
    );
  };

  return { patient, error, addEntry };
};
