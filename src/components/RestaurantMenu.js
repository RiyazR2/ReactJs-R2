import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurantInfo = useRestaurantMenu(resId);
  console.log("restaurantInfo", restaurantInfo); // don't delete this, this is for reference

  //for RestaurantCategory to do Expand or Collapse
  const [showIndex, setShowIndex] = useState(null);

  if (restaurantInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating } =
    restaurantInfo?.cards[0]?.card?.card?.info; // Always check the path [json / restaurantInfo]

  const { itemCards } =
    restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card; // Always check the path [json / restaurantInfo]
  console.log(
    "itemCards",
    restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );
  const categories =
    restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("Categories:", categories);
  return (
    <div className="menu text-center">
      <h1 className="mt-6 mb-2 font-bold text-2xl">{name}</h1>

      <h3 className="font-bold text-lg">
        {cuisines.join(", ")} | {costForTwoMessage} | {avgRating} stars
      </h3>

      {/* Categories Accordion */}
      {categories.map((category, index) => (
        //Controlled Component
        <RestaurantCategory
          key={index}
          categoryData={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setIndex={() => setShowIndex(index)}
        />
      ))}

      {/* <hr />

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
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
