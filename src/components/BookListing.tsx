import React from "react";

import { IBook } from "../type";

type TOwnProps = {
  books: IBook[];
};

const BookListing = (props: TOwnProps) => {
  const { books } = props;

  if (!books.length) {
    return <div>There is no book available</div>;
  }

  return <div>{"BookListing"}</div>;
};
export default BookListing;
