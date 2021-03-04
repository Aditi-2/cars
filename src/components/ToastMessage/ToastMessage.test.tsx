import React from "react";
import { create } from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import { ToastMessage, ToastMessageProps } from "./ToastMessage";

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

const baseProps: ToastMessageProps = {
  message: 'Test Message'
};

describe("ToastMessage Test", () => {
  it("Should match the snapshot", () => {
    const component = create(<ToastMessage {...baseProps} />);
    expect(component).toMatchSnapshot();
  });

  it("Should render ToastMessage", () => {
    render(<ToastMessage {...baseProps} />);
    const text = screen.getByText('Test Message')
    expect(text).toBeInTheDocument();
  });
});
