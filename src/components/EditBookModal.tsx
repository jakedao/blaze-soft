import React, { useEffect, useState } from 'react';

import { useBook } from '../hooks';
import '../styles/CreateBookModal.style.scss';
import { IBook, TBookFormValues } from '../type';

import BookForm from './BookForm';
import { Button } from './common';

type TOwnProps = {
  book: IBook;
  handleCloseBookModal: () => void;
};

const EditBookModal = (props: TOwnProps) => {
  const { handleCloseBookModal, book } = props;

  const [selectedBook, setSelectedBook] = useState<IBook>(book);
  const isValidForm = Object.values(selectedBook).every((value) => !!value);

  const { onEditBook } = useBook();

  const onChangeFormValues = (key: keyof IBook, value: TBookFormValues) => {
    setSelectedBook({ ...selectedBook, [key]: value });
  };

  const handleEditBook = () => {
    onEditBook(selectedBook);

    handleCloseBookModal();
  };

  useEffect(() => {
    if (book) {
      setSelectedBook(book);
    }
  }, [book]);

  return (
    <div className="book-modal">
      <div className="book-modal__header">
        <h3>Edit Book</h3>
      </div>

      <div className="book-modal__body">
        <BookForm formValues={selectedBook} onChangeForm={onChangeFormValues} />
      </div>

      <div className="book-modal__footer">
        <Button onClick={handleCloseBookModal}>Cancel</Button>
        <Button
          variant="secondary"
          onClick={handleEditBook}
          disabled={!isValidForm}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default EditBookModal;
