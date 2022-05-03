import React from "react";
import Modal from "./Modal";
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";

describe("Modal", () => {
  const files = [{ name: "dummyFile1" }, { name: "dummyFile2" }];

  it("should render", () => {
    const { getByTestId } = render(<Modal show={true} />);

    expect(getByTestId("modal")).toBeInTheDocument();
  });

  it("should display file name over input fields", () => {
    const { getByTestId, getByText } = render(
      <Modal show={true} files={files} />
    );

    const spikeSwitch = getByTestId("spike-switch");
    fireEvent.click(spikeSwitch);

    expect(getByText("dummyFile1")).toBeInTheDocument();
    expect(getByText("dummyFile2")).toBeInTheDocument();
  });

  it("should display validation warnings input data missing", () => {
    const { getByTestId, getByText } = render(<Modal show={true} />);

    const submit = getByText("Save Changes");
    fireEvent.click(submit);

    expect(getByText("Provide taxId")).toBeInTheDocument();
  });
});
