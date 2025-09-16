import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ItemListAccordion from "./ItemListAccordion";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const handleAccordionClick = (id) => {
    setShowIndex(id);
  };

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;
  const menu =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards;

  const filteredCards =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item?.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <div className="m-3 p-2 ">
        <h1 className="font-bold text-3xl my-3">{name}</h1>
        <h4 className="font-bold">
          {cuisines?.join(", ")} - {costForTwoMessage}
        </h4>
      </div>

      {filteredCards.map((item) => (
        <ItemListAccordion
          item={item}
          key={item?.card?.card?.categoryId}
          showItems={showIndex === item?.card?.card?.categoryId}
          handleAccordionClick={handleAccordionClick}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
