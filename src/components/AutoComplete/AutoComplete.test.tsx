import React from "react";
import { create } from "react-test-renderer";
import { fireEvent, render, screen } from "@testing-library/react";
import { AutoComplete, AutoCompleteProps } from "./AutoComplete";

const baseProps: AutoCompleteProps = {
  disabled: false,
  displayList: ["ABC", "DEF"],
  type: "Test",
};

describe("AutoComplete Test", () => {
  it("Should match the snapshot", () => {
    const component = create(<AutoComplete {...baseProps} />);
    expect(component).toMatchSnapshot();
  });

  it("Should render AutoComplete", () => {
    render(<AutoComplete {...baseProps} />);
    const inputField = screen.getByPlaceholderText("Search Test...");
    expect(inputField).toBeInTheDocument();
  });

  it("Should render Item list on focus", () => {
    render(<AutoComplete {...baseProps} />);
    const inputField = screen.getByPlaceholderText("Search Test...");
    inputField.focus();
    const item = screen.getByText("ABC");
    expect(item).toBeInTheDocument();
  });

  it("Should select item on click", () => {
    const handleClick = jest.fn();
    render(<AutoComplete {...baseProps} selection={handleClick} />);
    const inputField = screen.getByPlaceholderText("Search Test...");
    inputField.focus();
    const item = screen.getByText("ABC");
    fireEvent.click(item);
    expect(handleClick).toBeCalledTimes(1);
    expect(handleClick).toBeCalledWith("ABC");
  });
});
