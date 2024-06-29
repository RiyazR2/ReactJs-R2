// import { CDN_URL } from "../utils/constants";
// import UserContext from "../utils/UserContext";
// import { useContext } from "react";
// const RestaurantCard = (props) => {
//   const { restData } = props;
//   // console.log(restData);
//   const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
//     restData?.info;

//   const { loggedInUser } = useContext(UserContext);
//   return (
//     <div
//       data-testid="resCard"
//       className="m-4 p-4 w-[250px]  rounded-lg bg-gray-100 hover:bg-gray-300 "
//     >
//       <img
//         className="w-full h-[150px] rounded-lg"
//         alt="res-logo"
//         src={CDN_URL + cloudinaryImageId}
//       />

//       <h3 className="font-bold py-3 text-lg">{name}</h3>
//       <hr />
//       <h4 className="font-semibold py-1 ">{cuisines.join(", ")}</h4>
//       <hr />
//       <h4 className="font-semibold py-1 ">{avgRating} stars</h4>
//       <hr />
//       <h4 className="font-semibold py-1 ">{costForTwo} </h4>
//       <hr />
//       <h4 className="font-semibold py-1 ">{sla?.slaString} </h4>
//       {/*  sla?.slaString === Delivery Time*/}
//       <hr />
//       {/* <h4 className="font-semibold py-1 ">User: {loggedInUser} </h4> */}
//     </div>
//   );
// };

// // info: aggregatedDiscountInfoV3: header: "20% OFF";

// // Higher Order Component
// // input - RestaurantCard ==> RestaurantCardDiscount

// export const withDiscountLabel = (RestaurantCard) => {
//   return (props) => {
//     const { header } = props?.restData?.info?.aggregatedDiscountInfoV3;
//     // console.log("header", props?.restData?.info?.aggregatedDiscountInfoV3);
//     return (
//       <div>
//         <label className="absolute bg-black text-white rounded-md ml-4 p-2 ">
//           {!header.includes("OFF") ? "Discount Soon 🤗" : header}
//         </label>
//         <RestaurantCard {...props} />
//       </div>
//     );
//   };
// };

// export default RestaurantCard;

/* ****************************** Updated Tailwindcss Style ****************************** */

import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const RestaurantCard = (props) => {
  const { restData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    restData?.info;
  const { loggedInUser } = useContext(UserContext);

  return (
    <div
      data-testid="resCard"
      className="m-4 p-6 w-[300px] rounded-lg bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-2"
    >
      <div className="relative overflow-hidden rounded-lg">
        <img
          className="w-full h-[200px] object-cover rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        {props?.restData?.info?.aggregatedDiscountInfoV3?.header && (
          <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
            {props.restData.info.aggregatedDiscountInfoV3.header}
          </div>
        )}
      </div>
      <h3 className="font-bold py-3 text-lg text-gray-800">{name}</h3>
      <h4 className="font-semibold py-1 text-gray-600">
        {cuisines.join(", ")}
      </h4>
      <div className="flex justify-between items-center py-2 text-gray-600">
        <span className="font-semibold">{avgRating} stars</span>
        <span className="font-semibold">{costForTwo}</span>
      </div>
      <h4 className="font-semibold py-1 text-gray-600">{sla?.slaString}</h4>
    </div>
  );
};

// Higher Order Component
// input - RestaurantCard ==> RestaurantCardDiscount

export const withDiscountLabel = (RestaurantCard) => {
  return (props) => {
    const { header } = props?.restData?.info?.aggregatedDiscountInfoV3;
    return (
      <div>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
