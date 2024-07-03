import Shimmer, { RestaurantInfoShimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  // CUSTOM HOOK
  const restaurantInfo = useRestaurantMenu(resId);
  console.log("restaurantInfo", restaurantInfo); // ! don't delete this, this is for reference

  //for RestaurantCategory to do Expand or Collapse
  const [showIndex, setShowIndex] = useState(0);

  if (restaurantInfo === null) return <RestaurantInfoShimmer />;

  const { name, cuisines, costForTwoMessage, avgRating } =
    restaurantInfo?.cards[2]?.card?.card?.info; // ! Always check the path [json / restaurantInfo]

  // const { itemCards } =
  //   restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card; // Always check the path [json / restaurantInfo]
  // console.log("itemCards",restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ); // ! Always check the path [json / restaurantInfo]

  return (
    <div className="menu text-center">
      <h1 className="mt-6 mb-2 font-bold text-2xl">{name}</h1>

      <h3 className="font-bold text-lg">
        {cuisines.join(", ")} | {costForTwoMessage} | {avgRating} stars
      </h3>

      {/* Categories Accordion */}
      {categories?.map((category, index) => (
        //Controlled Component
        <RestaurantCategory
          key={index}
          categoryData={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)} // Passing setShowIndex to my Children, I will pass a function and this function basically setShowIndex of that particular index
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

/* ****************************** Updated Tailwindcss Style ****************************** */

// import Shimmer from "./Shimmer";
// import { useParams } from "react-router-dom";
// import useRestaurantMenu from "../utils/useRestaurantMenu";
// import RestaurantCategory from "./RestaurantCategory";
// import { useState } from "react";

// const RestaurantMenu = () => {
//   const { resId } = useParams();

//   // CUSTOM HOOK
//   const restaurantInfo = useRestaurantMenu(resId);
//   console.log("restaurantInfo", restaurantInfo); // ! don't delete this, this is for reference

//   //for RestaurantCategory to do Expand or Collapse
//   const [showIndex, setShowIndex] = useState(0);

//   if (restaurantInfo === null) return <Shimmer />;

//   const { name, cuisines, costForTwoMessage, avgRating } =
//     restaurantInfo?.cards[2]?.card?.card?.info; // ! Always check the path [json / restaurantInfo]

//   // const { itemCards } =
//   //   restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card; // Always check the path [json / restaurantInfo]
//   // console.log("itemCards",restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
//   const categories =
//     restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
//       (c) =>
//         c.card?.card?.["@type"] ===
//         "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
//     ); // ! Always check the path [json / restaurantInfo]

//   return (
//     <div className="menu bg-gray-50 text-center p-6">
//       <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
//         <h1 className="mt-6 mb-2 font-bold text-3xl text-gray-800">{name}</h1>
//         <h3 className="font-semibold text-lg text-gray-600">
//           {cuisines.join(", ")} | {costForTwoMessage} | {avgRating} stars
//         </h3>
//       </div>

//       {/* Categories Accordion */}
//       <div className="mt-6">
//         {categories?.map((category, index) => (
//           //Controlled Component
//           <RestaurantCategory
//             key={index}
//             categoryData={category?.card?.card}
//             showItems={index === showIndex}
//             setShowIndex={() => setShowIndex(index)} // Passing setShowIndex to my Children, I will pass a function and this function basically setShowIndex of that particular index
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RestaurantMenu;
