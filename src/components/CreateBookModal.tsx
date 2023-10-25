import React, { useState } from 'react';

import { useBook, useCommon } from '../hooks';
import '../styles/CreateBookModal.style.scss';
import { EBookCategory, IBook, TBookFormValues } from '../type';

import BookForm from './BookForm';
import { Button } from './common';

type TOwnProps = {
  handleCloseBookModal: () => void;
};

const initBookFormValues: IBook = {
  name: "",
  price: "",
  description: "",
  category: EBookCategory.Business,
};

const CreateBookModal = (props: TOwnProps) => {
  const { handleCloseBookModal } = props;

  const [formValues, setFormValues] = useState<IBook>(initBookFormValues);
  const isValidForm = Object.values(formValues).every((value) => !!value);

  const { onAddBook } = useBook();
  const { onToggleToast } = useCommon();

  const onChangeFormValues = (key: keyof IBook, value: TBookFormValues) => {
    setFormValues({ ...formValues, [key]: value });
  };

  const onCreateBook = () => {
    onAddBook(formValues);

    handleCloseBookModal();
    onToggleToast({
      isVisible: true,
      type: "success",
      message: `Book ${formValues.name} was added successfully`,
    });
  };

  return (
    <div className="book-modal">
      <div className="book-modal__header">
        <h3>Create Book</h3>
      </div>

      <div className="book-modal__body">
        <BookForm formValues={formValues} onChangeForm={onChangeFormValues} />
      </div>

      <div className="book-modal__footer">
        <Button onClick={handleCloseBookModal}>Cancel</Button>
        <Button
          variant="secondary"
          onClick={onCreateBook}
          disabled={!isValidForm}
        >
          Create
        </Button>
      </div>
    </div>
  );
};

export default CreateBookModal;
