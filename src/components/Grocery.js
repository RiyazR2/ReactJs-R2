import React from "react";
import mockGroceryData from "../components/Mocks/mockGroceryData.json";

const Grocery = () => {
  const { groceries, vegetables } = mockGroceryData;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1>
        Assume : This is Our Grocery Online Store, and we have a lot of
        component inside it.
        <br /> (this is just for lazy loading Testing)
      </h1>
      <h1 className="text-3xl font-bold text-center ">Grocery Store</h1>

      <h2 className="text-2xl font-semibold mb-2 mt-16">Fruits</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 cursor-pointer ">
        {groceries.map((item) => (
          <div key={item.id} className="bg-white p-4 shadow rounded-md">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover mb-2"
            />
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <span className="text-gray-600">&#8377;{item.price}</span>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-20 mb-2">Vegetables</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {vegetables.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 shadow rounded-md cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover mb-2"
            />
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <span className="text-gray-600">&#8377;{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/api/instamart/home?clientId=INSTAMART-APP"
  //   );
  //   const json = await data.json();
  //   console.log(json);
  // };
  // return (
  //   <h1>
  //     Our Grocery Online Store, and we have a lot of component inside this
  //     webpage.
  //   </h1>
  // );
};

export default Grocery;
