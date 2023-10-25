import { createSlice } from "@reduxjs/toolkit";

import { IBook } from "../type";

import type { PayloadAction } from "@reduxjs/toolkit";
export interface IBookState {
  books: IBook[];
}

const initialState: IBookState = {
  books: [],
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
  },
});

// Action creators are generated for each case reducer function
export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
