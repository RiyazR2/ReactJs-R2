import { useDispatch, useSelector } from "react-redux";
import ItemList_Category from "./ItemList_Category";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4  ">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <ItemList_Category items={cartItems} />
      </div>

      {cartItems.length === 0 && (
        <h1>
          Your cart is empty You can go to home page to view more restaurants
        </h1>
      )}
      <button
        className="p-2 m-2 bg-black text-white rounded-lg "
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
    </div>
  );
};
export default Cart;
