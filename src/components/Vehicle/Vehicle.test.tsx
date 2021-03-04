import React from "react";
import { create } from "react-test-renderer";
import { Vehicle } from "./Vehicle";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: () => ({ selectedModel: "A", vehicles: ["A", "B"] }),
  useDispatch: () => mockDispatch,
}));

describe("Vehicle Test", () => {
  it("Should match the snapshot", () => {
    const component = create(<Vehicle />);
    expect(component).toMatchSnapshot();
  });
});
