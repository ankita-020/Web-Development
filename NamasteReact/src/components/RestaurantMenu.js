import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState({});
  const [menu, setMenu] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API + resId);

      const info = await data.json();

      setResInfo(info?.data?.cards[2]?.card?.card?.info);

      const menuItems =
        info?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.itemCards;
      setMenu(menuItems);
      console.log(menuItems);
    } catch (err) {
      console.log(err);
    }
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } = resInfo;

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
