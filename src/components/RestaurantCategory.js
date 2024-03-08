import { useState } from "react";
import ItemList_Category from "./ItemList_Category";

const RestaurantCategory = ({ categoryData }) => {
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    console.log("Clicked");
    setShowItems(!showItems);
  };

  console.log("categoryData:", categoryData);
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 p-4  bg-gray-50 shadow-lg ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          {/* Accordion Header */}
          <span className="font-bold text-lg">
            {categoryData.title} ({categoryData.itemCards.length})
          </span>
          <span> ⬇️ </span>
        </div>

        {showItems && <ItemList_Category items={categoryData.itemCards} />}
      </div>
      {/* Accordion Body */}
    </div>
  );
};

export default RestaurantCategory;
