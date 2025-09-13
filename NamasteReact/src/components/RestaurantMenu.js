import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;
  const menu =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h4>
        [{cuisines?.join(", ")} - {costForTwoMessage}]
      </h4>
      {menu.map((item) => (
        <div className="menu-card" key={item?.card?.info?.id}>
          <h3>{item?.card?.info?.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
