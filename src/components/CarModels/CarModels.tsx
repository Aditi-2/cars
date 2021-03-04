import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVehicles } from "../../api/fetch-cars";
import { RootState } from "../../redux/rootReducer";
import { Cars } from "../../redux/slice/cars";
import { Toast } from "../../redux/slice/toast";
import { AutoComplete } from "../AutoComplete/AutoComplete";
import { Vehicle } from "../Vehicle/Vehicle";

export const CarModel: React.FC = () => {
  const dispatch = useDispatch();
  const { carModels, selectedManufacturer } = useSelector(
    (state: RootState) => state.cars
  );

  const getVehicle = async (modelName: string) => {
    try {
      dispatch(Cars.actions.setSelectedModel(modelName));
      const data = await getVehicles(selectedManufacturer, modelName);
      dispatch(Cars.actions.setVehicle(data));
    } catch (err) {
      dispatch(Toast.actions.setError(err.message));
    }
  };
  const removeSelectedModel = () => {
    dispatch(Cars.actions.removeSelectedModel());
  };
  return (
    <>
      <AutoComplete
        displayList={carModels}
        selection={getVehicle}
        clearSearch={removeSelectedModel}
        type={"model"}
        disabled={selectedManufacturer === "" && carModels.length === 0}
      />
      <Vehicle />
    </>
  );
};
