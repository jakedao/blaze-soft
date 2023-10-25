import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IToast } from '../type';

export interface ICommonState {
  toast: IToast;
}

const initialState: ICommonState = {
  toast: {
    isVisible: false,
    message: "",
    type: "success",
  },
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    toggleToast: (state, action: PayloadAction<IToast>) => {
      state.toast = action.payload;
    },
  },
});

export const { toggleToast } = commonSlice.actions;

export default commonSlice.reducer;
