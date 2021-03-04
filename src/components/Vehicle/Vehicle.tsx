import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { Cars } from "../../redux/slice/cars";
import { AutoComplete } from "../AutoComplete/AutoComplete";

export const Vehicle: React.FC = () => {
  const dispatch = useDispatch();
  const { selectedModel, vehicles } = useSelector(
    (state: RootState) => state.cars
  );
  const gsetSelectedVehicle = async (vehicle: string) => {
    dispatch(Cars.actions.setSelectedVehicle(vehicle));
  };
  const removeSelectedVehicle = () => {
    dispatch(Cars.actions.removeSelectedVehicle());
  };
  return (
    <>
      <AutoComplete
        displayList={vehicles}
        type={"vehicle"}
        disabled={selectedModel === "" && vehicles.length === 0}
        selection={gsetSelectedVehicle}
        clearSearch={removeSelectedVehicle}
      />
    </>
  );
};
