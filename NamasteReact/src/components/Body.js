import { useState, useEffect } from "react";
import { Link } from "react-router";
import RestaurantCard, { withExtraLabelCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const RestaurantCardWithLabel = withExtraLabelCard(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8498481&lng=77.6544856&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const res = await data.json();
      setListOfRestaurant(
        res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRes(
        res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (err) {
      console.log(err);
    }
  };

  if (!onlineStatus) {
    return (
      <h1>
        Looks like you are offline. Please check your internet connection.
      </h1>
    );
  }

  if (listOfRestaurant.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="m-4 p-4">
        <input
          className="border border-solid border-black mr-2 py-1 outline-none"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="mr-6 px-4 py-1.5 rounded-md bg-green-100"
          onClick={() => {
            const searchedRes = listOfRestaurant.filter((res) => {
              console.log(res.info.name);

              return res.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });

            setFilteredRes(searchedRes);
          }}
        >
          Search
        </button>
        <button
          className="px-4 py-2 bg-gray-100 rounded-md"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating >= 4
            );
            setFilteredRes(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRes.map((restaurant) => (
          <Link
            to={`/restaurants/${restaurant.info.id}`}
            key={restaurant.info.id}
          >
            {restaurant.info.aggregatedDiscountInfoV3.header ? (
              <RestaurantCardWithLabel resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
