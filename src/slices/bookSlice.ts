import { createSlice } from '@reduxjs/toolkit';

import { EBookCategory, IBook, TUpdateBookPayload } from '../type';

import type { PayloadAction } from "@reduxjs/toolkit";
export interface IBookState {
  books: IBook[];
}

const initialState: IBookState = {
  books: [
    { name: "Harry Potter", price: "12$", category: EBookCategory.Comics },
  ],
};

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<IBook>) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action: PayloadAction<string>) => {
      const bookId = action.payload;
      state.books = state.books.filter((book) => book.id !== bookId);
    },
    updateBook: (state, action: PayloadAction<TUpdateBookPayload>) => {
      const { id: bookId, payload: newBookInfo } = action.payload;
      state.books = state.books.map((book) => {
        if (book.id === bookId) {
          return { ...newBookInfo };
        }
        return { ...book };
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addBook, removeBook, updateBook } = bookSlice.actions;

export default bookSlice.reducer;
