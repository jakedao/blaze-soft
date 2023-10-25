export enum EBookCategory {
  Business,
  Comics,
  Cooking,
  History,
  Horror,
}

export interface IBook {
  id: string;
  name: string;
  price: string;
  category: EBookCategory;
  description?: string;
}
