import React, { useState } from 'react';

import { useBook, useCommon } from '../hooks';
import '../styles/BookListing.style.scss';
import { IBook } from '../type';
import { TColConfig } from '../type/table';

import BookForm from './BookForm';
import { Button, Table } from './common';
import EditBookModal from './EditBookModal';

type TOwnProps = {
  books: IBook[];
};

const colConfigs: TColConfig = [
  { id: "id", text: "ID", width: 300 },
  { id: "name", text: "Name", width: 200 },
  { id: "price", text: "Price", width: 200 },
  { id: "description", text: "Description", width: 300 },
  { id: "category", text: "Category", width: 200 },
  { id: "actions", text: "Actions", width: 200 },
];

const BookListing = (props: TOwnProps) => {
  const { books } = props;

  const [selectedBook, onSelectBook] = useState<IBook>();

  const { onRemoveBook } = useBook();
  const { onToggleToast } = useCommon();

  const handleRemoveBook = (id: string, name: string) => {
    onRemoveBook(id);

    onToggleToast({
      isVisible: true,
      message: `Book ${name} was removed`,
      type: "error",
    });
  };

  if (!books.length) {
    return <div>There is no book available</div>;
  }

  return (
    <>
      <Table colConfigs={colConfigs}>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.name}</td>
              <td>{book.price}</td>
              <td>{book.description || "n/a"}</td>
              <td>{book.category}</td>
              <td className="action-cell">
                <Button onClick={() => onSelectBook(book)}>Edit</Button>
                <Button
                  variant="error"
                  onClick={() => handleRemoveBook(book.id!, book.name)}
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {selectedBook && (
        <EditBookModal
          book={selectedBook}
          handleCloseBookModal={() => onSelectBook(undefined)}
        />
      )}
    </>
  );
};

export default BookListing;
