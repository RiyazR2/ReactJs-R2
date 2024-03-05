import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    restData?.info;
  return (
    <div className="m-4 p-4 w-[250px]  rounded-lg bg-gray-100 hover:bg-gray-300 ">
      <img
        className="w-full h-[150px] rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />

      <h3 className="font-bold py-3 text-lg">{name}</h3>
      <hr />
      <h4 className="font-semibold py-1 ">{cuisines.join(", ")}</h4>
      <hr />
      <h4 className="font-semibold py-1 ">{avgRating} stars</h4>
      <hr />
      <h4 className="font-semibold py-1 ">{costForTwo} </h4>
      <hr />
      <h4 className="font-semibold py-1 ">{sla?.slaString} </h4>
      <hr />
      {/*  sla?.slaString === Delivery Time*/}
    </div>
  );
};

export default RestaurantCard;
