import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  console.log("resInfo", resInfo); // don't delete this, this is for reference
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards[0]?.card?.card?.info; // Always check the path [json / resInfo]

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card; // Always check the path [json / resInfo]

  return (
    <div className="menu ml-10">
      <h1 className="font-bold mt-5">{name}</h1>

      <h3 className="font-semibold">
        {cuisines.join(", ")} | {costForTwoMessage} | {avgRating} stars
      </h3>
      <hr />

      <h2 className="font-bold mt-5 ml-10 text-black">MENU</h2>
      <ul className="ml-10">
        {itemCards?.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - {" Rs."}
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
        <h1 align="center">More Info Will be Added Soon... 🤗</h1>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
