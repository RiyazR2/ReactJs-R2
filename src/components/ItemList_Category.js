import { CDN_URL } from "../utils/constants";

const ItemList_Category = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
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
          <div className="w-3/12 p-4 ">
            <div className="absolute ml-5">
              <button className=" w-24 p-1 font-semibold mt-24  bg-white text-[#68ae52] border border-black rounded-lg  hover:bg-green-200">
                ADD
              </button>
            </div>
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              alt="logo"
              className="w-40"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList_Category;
