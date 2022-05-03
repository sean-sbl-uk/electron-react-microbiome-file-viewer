import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import Dropzone from "./Dropzone";

describe("Dropzone", () => {
  it("should render", () => {
    const { getByTestId } = render(<Dropzone />);

    expect(getByTestId("dropzone")).toBeInTheDocument();
  });
});
