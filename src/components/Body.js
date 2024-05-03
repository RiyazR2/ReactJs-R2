import RestaurantCard, { withDiscountLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { swiggyAPI } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/UserContext";

const Body = () => {
  // local state Variable - super powerful variable
  console.log("Body");
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardDiscount = withDiscountLabel(RestaurantCard);

  // Whenever state variable update, react triggers a reconciliation cycle (re-renders the component)
  // console.log("Body Rendered\nList Of Restaurants: ", listOfRestaurants); //tempororay Commented down

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(swiggyAPI);

    const json = await data.json();

    // console.log("SwigyyAPI: ", json);

    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // const searchHandler = ;

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks Like You're Offline!! Please Check Your Internet Connection...
      </h1>
    );

  // const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="m-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="pl-2 border border-solid border-black "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="m-4 px-4 py-[3] bg-green-200 rounded-lg"
            onClick={() => {
              const filterByName = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              const filterByCuisines = listOfRestaurants.filter((res) =>
                res.info.cuisines.some((cuisine) =>
                  cuisine.toLowerCase().includes(searchText.toLowerCase())
                )
              );

              const filteredRestaurant = [...filterByName, ...filterByCuisines];

              setFilteredRestaurant(filteredRestaurant);
              console.log("fil", filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center round">
          <button
            className="px-4 py-[3] bg-gray-100 rounded-lg "
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res?.info?.avgRating > 4.4
              );
              console.log(filteredList);
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap ">
        {filteredRestaurant.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {/* If the Restourant have Discount then add a Discount Label on it */}
            {restaurant?.info?.aggregatedDiscountInfoV3?.header ? (
              <RestaurantCardDiscount restData={restaurant} />
            ) : (
              <RestaurantCard restData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
