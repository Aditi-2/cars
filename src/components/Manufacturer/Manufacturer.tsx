import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCarModels, getCars } from "../../api/fetch-cars";
import { RootState } from "../../redux/rootReducer";
import { Cars } from "../../redux/slice/cars";
import { Toast } from "../../redux/slice/toast";
import { AutoComplete } from "../AutoComplete/AutoComplete";
import { CarModel } from "../CarModels/CarModels";

export const Manufacturer: React.FC = () => {
  const { manufacturers } = useSelector((state: RootState) => state.cars);

  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getCars();
        dispatch(Cars.actions.setManufacturer(data));
      } catch (err) {
        dispatch(Toast.actions.setError(err.message));
      }
    };
    getData();
  }, []);

  const getModels = async (manufacturer: string) => {
    try {
      dispatch(Cars.actions.setSelectedManufacturer(manufacturer));
      const data = await getCarModels(manufacturer);
      dispatch(Cars.actions.setModel(data));
    } catch (err) {
      dispatch(Toast.actions.setError(err.message));
    }
  };
  const removeSelectedManufaturer = () => {
    dispatch(Cars.actions.removeSelectedManufacturer());
  };
  return (
    <>
      <AutoComplete
        displayList={manufacturers}
        disabled={manufacturers.length === 0}
        selection={getModels}
        type={"manufacturer"}
        clearSearch={removeSelectedManufaturer}
      />
      <CarModel />
    </>
  );
};
