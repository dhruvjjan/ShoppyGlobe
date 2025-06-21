// This component displays a single item in the cart with options to update quantity or remove it.

import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
    }
  };

  const increaseQuantity = () => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const decreaseQuantity = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="flex items-center justify-between border p-4 mb-4 rounded shadow">
      <img
        src={item.thumbnail}
        alt={item.title}
        className="w-24 h-24 object-cover rounded"
      />
      <div className="flex-1 ml-4">
        <h2 className="text-xl font-semibold">{item.title}</h2>
        <p className="text-gray-600">₹ {item.price}</p>
        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={decreaseQuantity}
            className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={handleInputChange}
            className="w-16 text-center border rounded px-2 py-1"
          />
          <button
            onClick={increaseQuantity}
            className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
          >
            +
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-1">Rating: {item.rating} ⭐</p>
      </div>
      <button
        onClick={handleRemove}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
