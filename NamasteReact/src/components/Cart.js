import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const { cartItems } = useSelector((store) => store.cartInfo);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="w-6/12 m-auto text-center">
      <h1 className="font-bold text-3xl my-8">Cart</h1>
      <button
        className="bg-black text-white p-2 m-2 mb-8 text-center cursor-pointer"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 && (
        <h1>Your cart is empty. Add items to the cart!</h1>
      )}
      <ItemList item={cartItems} />
    </div>
  );
};

export default Cart;
