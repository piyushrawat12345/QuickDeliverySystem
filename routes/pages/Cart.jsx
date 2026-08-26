import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  decreaseQuantity,
  removeItem,
  clearCart,
} from "../redux/slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  console.log("items:",items);
  
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  console.log("totalPrice:",totalPrice)
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto p-6 text-center">
        <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>
        <p className="text-gray-500">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Your Cart</h1>
        <button
          onClick={() => dispatch(clearCart())}
          className="text-sm text-red-600 hover:underline"
        >
          Clear Cart
        </button>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b pb-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">
                   &#8377; {item.price.toFixed(2)} each
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => dispatch(decreaseQuantity({ id: item.id }))}
                className="w-8 h-8 border rounded flex items-center justify-center"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => dispatch(addItem({ ...item, quantity: 1 }))}
                className="w-8 h-8 border rounded flex items-center justify-center"
              >
                +
              </button>

              <p className="w-20 text-right font-medium">
                &#8377;{(item.price * item.quantity).toFixed(2)}
              </p>

              <button
                onClick={() => dispatch(removeItem({ id: item.id }))}
                className="text-red-500 hover:underline text-sm"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="text-gray-600">{totalQuantity} items</p>
        <p className="text-xl font-semibold">Total: &#8377;{totalPrice.toFixed(2)}</p>
      </div>

      <button className="mt-6 w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800">
        Checkout
      </button>
    </div>
  );
};

export default Cart;