import { Dialog, DialogTitle, DialogContent, Divider, Alert } from "@mui/material";

import AddEntryForm from "./AddEntryForm/AddEntryForm";
import { EntryFormValues, Diagnosis } from "../types";

interface Props {
  modalOpen: boolean;
  diagnoses: Array<Diagnosis>;
  onClose: () => void;
  onSubmit: (values: EntryFormValues) => void;
  error?: string;
}

const AddEntryModal = ({
  modalOpen,
  diagnoses,
  onClose,
  onSubmit,
  error,
}: Props) => (
  <Dialog fullWidth={true} open={modalOpen} onClose={() => onClose()}>
    <DialogTitle>Add a new entry</DialogTitle>
    <Divider />
    <DialogContent>
      {error && <Alert severity="error">{error}</Alert>}
      <AddEntryForm
        diagnoses={diagnoses}
        onSubmit={onSubmit}
        onCancel={onClose}
      />
    </DialogContent>
  </Dialog>
);

export default AddEntryModal;
