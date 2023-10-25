import React from 'react';

import { EBookCategory, IBook, TBookFormValues } from '../type';

import { SelectField, TextField } from './common';

type TOwnProps = {
  formValues: IBook;
  onChangeForm: (key: keyof IBook, formValues: TBookFormValues) => void;
};

const BookForm = (props: TOwnProps) => {
  const { formValues, onChangeForm } = props;
  const { name, price, description = "", category } = formValues;

  const categoryOpts = Object.keys(EBookCategory).map((cat) => cat);

  return (
    <div>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => onChangeForm("name", e.target.value)}
      />
      <TextField
        label="Price"
        value={price}
        onChange={(e) => onChangeForm("price", e.target.value)}
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => onChangeForm("description", e.target.value)}
      />
      <SelectField
        label="Category"
        opts={categoryOpts}
        value={category}
        onSelect={(e) =>
          onChangeForm("category", e.target.value as EBookCategory)
        }
      />
    </div>
  );
};
export default BookForm;
