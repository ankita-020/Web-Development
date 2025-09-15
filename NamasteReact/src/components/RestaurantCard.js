import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 h-120 hover:bg-gray-200">
      <div className="mb-3">
        <img
          className="rounded-lg h-48 w-full"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>

      <div>
        <h3 className="font-bold py-3 text-lg">{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <p>{avgRating}</p>
        <p>{costForTwo}</p>
        <p>{sla?.slaString}</p>
      </div>
    </div>
  );
};

export const withExtraLabelCard = (RestaurantCard) => {
  return (props) => {
    const { resData } = props;
    const {
      aggregatedDiscountInfoV3: { header, subHeader },
    } = resData?.info;

    return (
      <div className="relative">
        <RestaurantCard {...props} />
        <p className="mx-4 px-4 absolute bottom-3 font-bold text-xl">
          {header} {subHeader}{" "}
        </p>
      </div>
    );
  };
};

export default RestaurantCard;
