import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import ItemList from "./ItemList";

const ItemListAccordion = ({ item, showItems, handleAccordionClick }) => {
  const dispatch = useDispatch();

  const handleAddClick = (cartData) => {
    dispatch(addItem(cartData));
  };

  return (
    <div className="w-9/12 mx-auto my-5 p-4 shadow-lg text-left cursor-pointer">
      <div
        className="flex justify-between"
        onClick={() => handleAccordionClick(item?.card?.card?.categoryId)}
      >
        <h3 className="font-bold text-lg">
          {item?.card?.card?.title} ({item?.card?.card?.itemCards?.length})
        </h3>
        <h3>⬇️</h3>
      </div>
      <div className="my-5">
        {showItems && <ItemList item={item?.card?.card?.itemCards} />}
      </div>
    </div>
  );
};

export default ItemListAccordion;
