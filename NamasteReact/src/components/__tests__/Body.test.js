import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import { BrowserRouter } from "react-router";
import Body from "../Body";
import "@testing-library/jest-dom";
import MOCK_DATA from "./mocks/allRestauarantData.json";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("Body comp test cases", () => {
  it("should load Body component", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const cards = screen.getAllByTestId("resCard");
    expect(cards.length).toBe(8);
  });

  it("should search by changing input", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target: { value: "burger" } });

    const searchBtn = screen.getByRole("button", { name: "Search" });

    expect(searchBtn).toBeInTheDocument();

    fireEvent.click(searchBtn);

    const cards = screen.getAllByTestId("resCard");

    expect(cards.length).toBe(1);
  });

  it("should filter top rated restaurant", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const topRatedButton = screen.getByRole("button", {
      name: "Top Rated Restaurants",
    });

    fireEvent.click(topRatedButton);

    const cards = screen.getAllByTestId("resCard");

    expect(cards.length).toBe(5);
  });
});
