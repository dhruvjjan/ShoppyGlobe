// This component displays a single product item with its image, title, price, and an "Add to Cart" button.

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductItem = ({ prod }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(prod));
  };

  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <Link to={`/product/${prod.id}`}>
        <img
          src={prod.thumbnail}
          alt={prod.title}
          className="w-full h-52 object-cover rounded"
        />
        <h3 className="text-lg font-semibold mt-2">{prod.title}</h3>
        <p className="text-gray-600">₹ {prod.price}</p>
      </Link>
      <button
        onClick={handleAddToCart}
        className="mt-2 w-1/2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
