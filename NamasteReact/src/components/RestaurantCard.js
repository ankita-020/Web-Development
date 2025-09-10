import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className="res-card">
      <div className="image-container">
        <img className="res-image" src={CDN_URL + cloudinaryImageId} />
      </div>

      <div className="res-detail">
        <h3>{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <p>{avgRating}</p>
        <p>{costForTwo}</p>
        <p>{sla.deliveryTime} mins</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
