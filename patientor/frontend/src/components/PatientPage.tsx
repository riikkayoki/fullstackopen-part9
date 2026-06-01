import { ReactElement, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Button } from "@mui/material";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import TransgenderIcon from "@mui/icons-material/Transgender";

import { Gender, EntryFormValues } from "../types";
import { usePatient } from "../hooks/usePatient";
import { useDiagnoses } from "../hooks/useDiagnoses";
import { getErrorMessage } from "../utils/errors";
import EntryDetails from "./EntryDetails";
import AddEntryModal from "./AddEntryModal";

const Wrapper = styled.div`
  margin-top: 16px;
`;

const Name = styled.h2`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SectionTitle = styled.h3`
  margin-top: 16px;
`;

const Info = styled.p`
  margin: 4px 0;
`;

const ErrorText = styled.p`
  color: #d32f2f;
`;

const genderIcon = (gender: Gender): ReactElement => {
  switch (gender) {
    case Gender.Male:
      return <MaleIcon aria-label="male" />;
    case Gender.Female:
      return <FemaleIcon aria-label="female" />;
    case Gender.Other:
      return <TransgenderIcon aria-label="other" />;
  }
};

const PatientPage = () => {
  const { id } = useParams<{ id: string }>();
  const { patient, error, addEntry } = usePatient(id);
  const diagnoses = useDiagnoses();

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [entryError, setEntryError] = useState<string>();

  const openModal = (): void => setModalOpen(true);

  const closeModal = (): void => {
    setModalOpen(false);
    setEntryError(undefined);
  };

  const submitNewEntry = async (values: EntryFormValues) => {
    try {
      await addEntry(values);
      closeModal();
    } catch (e: unknown) {
      setEntryError(getErrorMessage(e));
    }
  };

  if (error) {
    return (
      <Wrapper>
        <ErrorText>{error}</ErrorText>
      </Wrapper>
    );
  }

  if (!patient) {
    return (
      <Wrapper>
        <Info>Loading…</Info>
      </Wrapper>
    );
  }

  const icon = genderIcon(patient.gender);
  const name = patient.name;
  const ssn = patient.ssn;
  const occupation = patient.occupation;
  const date = patient.dateOfBirth;
  const hasEntries = patient.entries && patient.entries.length > 0;

  return (
    <Wrapper>
      <Name>
        {name} {icon}
      </Name>
      {ssn && <Info>ssn: {ssn}</Info>}
      <Info>occupation: {occupation}</Info>
      {patient.dateOfBirth && <Info>date of birth: {date}</Info>}

      <SectionTitle>entries</SectionTitle>
      {hasEntries ? (
        patient.entries?.map((entry) => (
          <EntryDetails key={entry.id} entry={entry} diagnoses={diagnoses} />
        ))
      ) : (
        <Info>No entries yet.</Info>
      )}

      <Button
        variant="contained"
        onClick={() => openModal()}
        sx={{ marginTop: 2 }}
      >
        Add New Entry
      </Button>
      <AddEntryModal
        modalOpen={modalOpen}
        onClose={closeModal}
        onSubmit={submitNewEntry}
        error={entryError}
      />
    </Wrapper>
  );
};

export default PatientPage;
