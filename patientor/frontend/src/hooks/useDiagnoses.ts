import { useEffect, useState } from "react";

import { Diagnosis } from "../types";
import diagnosisService from "../services/diagnoses";

export const useDiagnoses = (): Array<Diagnosis> => {
  const [diagnoses, setDiagnoses] = useState<Array<Diagnosis>>([]);

  useEffect(() => {
    const fetchDiagnoses = async () => {
      const data = await diagnosisService.getAll();
      setDiagnoses(data);
    };

    fetchDiagnoses().catch((error: unknown) => console.error(error));
  }, []);

  return diagnoses;
};
