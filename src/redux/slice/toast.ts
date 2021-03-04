import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CarStore {
  toastMessage: string;
}

const initialState: CarStore = {
  toastMessage: "",
};

export const Toast = createSlice({
  name: "toast",
  initialState,
  reducers: {
    setError: (state: CarStore, action: PayloadAction<string>) => {
      state.toastMessage = action.payload;
    },
    removeError: (state: CarStore) => {
      state.toastMessage = initialState.toastMessage;
    },
  },
});
