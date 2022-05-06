import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Dropzone from "./Dropzone";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("Dropzone", () => {
  const initialState = {};
  const mockStore = configureStore();
  let store, wrapper;

  it("should render", () => {
    store = mockStore(initialState);
    const { getByTestId } = render(
      <Provider store={store}>
        <Dropzone />
      </Provider>
    );

    expect(getByTestId("dropzone")).toBeInTheDocument();
  });
});
