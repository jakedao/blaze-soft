import React from 'react';

import '../styles/CreateBookModal.style.scss';

import Button from './common/Button';
import TextField from './common/TextField';

type TOwnProps = {
  handleCloseBookModal: () => void;
};

const CreateBookModal = (props: TOwnProps) => {
  const { handleCloseBookModal } = props;
  return (
    <div className="book-modal">
      <div className="book-modal__header">
        <h5>Create Book</h5>
      </div>

      <div className="book-modal__body">
        <TextField label="Book Name" />
        <TextField label="Book Price" inputProps={{ type: "number" }} />
        <TextField label="Book Description" inputProps={{ type: "text" }} />
      </div>

      <div className="book-modal__footer">
        <Button onClick={handleCloseBookModal}>Cancel</Button>
        <Button variant="secondary">OK</Button>
      </div>
    </div>
  );
};
export default CreateBookModal;
