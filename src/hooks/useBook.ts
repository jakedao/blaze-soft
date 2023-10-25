import { useDispatch, useSelector } from 'react-redux';

import { v4 as uuid } from 'uuid';

import { addBook, removeBook, updateBook } from '../slices/bookSlice';
import { RootState } from '../store';
import { TCreateBook, TUpdateBook } from '../type';

const useBook = () => {
  const dispatch = useDispatch();
  const books = useSelector((state: RootState) => state.books.books);

  const onAddBook = (book: TCreateBook) => {
    dispatch(addBook({ ...book, id: uuid() }));
  };

  const onRemoveBook = (bookId: string) => {
    dispatch(removeBook(bookId));
  };

  const onEditBook = (newBookData: TUpdateBook) => {
    // Edit Book always has id so we put ! as id is always available
    dispatch(updateBook({ id: newBookData.id!, payload: newBookData }));
  };

  return { books, onAddBook, onRemoveBook, onEditBook };
};

export default useBook;
