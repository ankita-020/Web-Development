import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import RestaurantCard from "../RestaurantCard";
import { withExtraLabelCard } from "../RestaurantCard";
import MOCK_DATA from "./mocks/resCardMock.json";

it("should render Restaurant Card", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  expect(screen.getByText("Chinese Wok")).toBeInTheDocument();
});

it("should render Restaurant Card with Label", () => {
  const RestaurantWithLabel = withExtraLabelCard(RestaurantCard);
  render(<RestaurantWithLabel resData={MOCK_DATA} />);

  expect(screen.getByText("Chinese Wok")).toBeInTheDocument();
});
