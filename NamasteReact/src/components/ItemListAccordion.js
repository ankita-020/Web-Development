import { useState } from "react";
import { CDN_URL } from "../utils/constants";

const ItemListAccordion = ({ item, showItems, handleAccordionClick }) => {
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
        {showItems &&
          item?.card?.card?.itemCards?.map((data) => {
            return (
              <div
                key={data?.card?.info?.name}
                className="flex justify-between border-b-2 mb-3 p-4 border-indigo-200 shadow-sm"
              >
                <div className="w-9/12">
                  <p className="font-bold">{data?.card?.info?.name}</p>
                  <p className="font-bold">₹ {data?.card?.info?.price / 100}</p>
                  <p>{data?.card?.info?.description}</p>
                </div>
                <div className="w-36 h-28">
                  <img src={CDN_URL + data?.card?.info?.imageId} />
                  <button className="py-4 w-25">Add+</button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ItemListAccordion;
