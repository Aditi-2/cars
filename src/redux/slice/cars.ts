import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CarStore {
  manufacturers: string[];
  carModels: string[];
  vehicles: string[];
  selectedManufacturer: string;
  selectedModel: string;
  selectedVehicle: string;
}

const initialState: CarStore = {
  manufacturers: [],
  carModels: [],
  vehicles: [],
  selectedManufacturer: "",
  selectedModel: "",
  selectedVehicle: "",
};

export const Cars = createSlice({
  name: "car",
  initialState,
  reducers: {
    setManufacturer: (state: CarStore, action: PayloadAction<string[]>) => {
      state.manufacturers = action.payload;
    },
    setModel: (state: CarStore, action: PayloadAction<string[]>) => {
      state.carModels = action.payload;
    },
    setVehicle: (state: CarStore, action: PayloadAction<string[]>) => {
      state.vehicles = action.payload;
    },
    setSelectedManufacturer: (
      state: CarStore,
      action: PayloadAction<string>
    ) => {
      state.selectedManufacturer = action.payload;
    },
    removeSelectedManufacturer: (state: CarStore) => {
      state.selectedManufacturer = initialState.selectedManufacturer;
    },
    setSelectedModel: (state: CarStore, action: PayloadAction<string>) => {
      state.selectedModel = action.payload;
    },
    removeSelectedModel: (state: CarStore) => {
      state.selectedModel = initialState.selectedModel;
    },
    setSelectedVehicle: (state: CarStore, action: PayloadAction<string>) => {
      state.selectedVehicle = action.payload;
    },
    removeSelectedVehicle: (state: CarStore) => {
      state.selectedVehicle = initialState.selectedVehicle;
    },
  },
});
