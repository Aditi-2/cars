import React from "react";
import { create } from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import { Card, CardProps } from "./Card";

const baseProps: CardProps = {
  manufacturer: 'A',
  model: 'B',
  vehicle: 'C'
};

describe("Card Test", () => {
  it("Should match the snapshot", () => {
    const component = create(<Card {...baseProps} />);
    expect(component).toMatchSnapshot();
  });

  it("Should render Card", () => {
    render(<Card {...baseProps} />);
    const text = screen.getByText('A')
    expect(text).toBeInTheDocument();
  });
});
