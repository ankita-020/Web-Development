import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddClick = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {item.map((data) => {
        return (
          <div
            key={data?.card?.info?.name}
            className="flex justify-between border-b-2 mb-3 p-4 border-indigo-200 shadow-sm"
            data-testid="foodItem"
          >
            <div className="w-9/12">
              <p className="font-bold">{data?.card?.info?.name}</p>
              <p className="font-bold">₹ {data?.card?.info?.price / 100}</p>
              <p>{data?.card?.info?.description}</p>
            </div>
            <div className="w-36 h-28 relative">
              <img
                src={CDN_URL + data?.card?.info?.imageId}
                className="w-full h-full"
              />
              <button
                className="py-2 w-15 bg-amber-200 absolute bottom-0 left-1/4"
                onClick={() => handleAddClick(data)}
              >
                Add +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
