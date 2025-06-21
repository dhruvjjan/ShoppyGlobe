// Description: Cart component that displays items in the user's cart

import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  if (cartItems.length === 0) {
    return <div className="text-center text-xl mt-8">Your cart is empty 🛒</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Cart;
