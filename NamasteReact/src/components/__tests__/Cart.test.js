import { act } from "react";
import { BrowserRouter } from "react-router";
import { fireEvent, render, screen } from "@testing-library/react";

import { Provider } from "react-redux";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "./mocks/resMenuData.json";
import appStore from "../../utils/appStore";
import Header from "../Header";
import "@testing-library/jest-dom";

globalThis.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("should load restuarant menu component", async () => {
  await act(() =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionText = screen.getByText(/Recommended/);

  expect(accordionText).toBeInTheDocument();

  fireEvent.click(accordionText);

  expect(screen.getAllByTestId("foodItem").length).toBe(3);

  expect(screen.getByText("Cart (0)")).toBeInTheDocument();

  const addBtn = screen.getAllByRole("button", { name: "Add +" });

  fireEvent.click(addBtn[0]);

  expect(screen.getByText("Cart (1)")).toBeInTheDocument();

  fireEvent.click(screen.getByRole("link", { name: "Cart (1)" }));
});
