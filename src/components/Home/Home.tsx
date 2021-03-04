import styled from "@emotion/styled";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { Card } from "../Card/Card";
import { Manufacturer } from "../Manufacturer/Manufacturer";
import { ToastMessage } from "../ToastMessage/ToastMessage";

export const Home: React.FC = () => {
  const {
    toast: { toastMessage },
    cars: { selectedManufacturer, selectedModel, selectedVehicle },
  } = useSelector((state: RootState) => state);
  return (
    <HomeStyle>
      <div className="home-container">
        <Manufacturer />
        {selectedManufacturer && (
          <Card
            manufacturer={selectedManufacturer}
            model={selectedModel}
            vehicle={selectedVehicle}
          />
        )}
        {toastMessage && <ToastMessage message={toastMessage} />}
      </div>
    </HomeStyle>
  );
};

const HomeStyle = styled.div`
  & .home-container {
    margin-top: 5rem;
  }
`;
