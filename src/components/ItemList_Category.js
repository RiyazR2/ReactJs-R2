import { IMG_CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemList_Category = ({ items, showRemoveButton }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="m-2 p-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2 font-semibold">
              <span>{item.card.info.name}</span>
              <span>
                ➡️ ₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>
            <div>
              <p className="text-xs">{item.card.info?.description}</p>
            </div>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute ml-5">
              <button
                className="w-14 p-1 mr-2 font-semibold  mt-16 bg-white text-[#68ae52] text-sm border border-black rounded-lg hover:bg-green-200"
                onClick={() => handleAddItem(item)}
              >
                ADD
              </button>
              {showRemoveButton && (
                <button
                  className="w-16 p-1 ml-2 font-semibold  mt-16 bg-white text-[#ff0000] text-sm border border-black rounded-lg hover:bg-red-200"
                  onClick={() => handleRemoveItem(item.card.info.id)}
                >
                  REMOVE
                </button>
              )}
            </div>
            <img
              className="w-40 h-24 rounded-lg"
              src={IMG_CDN_URL + item?.card?.info?.imageId}
              alt="logo"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList_Category;
