export type TToastType = "success" | "error";

export interface IToast {
  isVisible: boolean;
  type: TToastType;
  message: string;
}

export enum EBookCategory {
  Business = "Business",
  Comics = "Comics",
  Cooking = "Cooking",
  History = "History",
  Horror = "Horror",
}

export interface IBook {
  id?: string;
  name: string;
  price: string;
  category: EBookCategory;
  description?: string;
}

export type TCreateBook = Omit<IBook, "id">;
export type TUpdateBook = IBook;

export type TBookFormValues = string | number | EBookCategory;

export type TUpdateBookPayload = {
  id: string;
  payload: IBook;
};
