// Description: This component fetches and displays the details of a single product based on the product ID from the URL parameters. It also allows users to add the product to their cart.

import { useParams } from "react-router-dom"
import useFetchProduct from "../hooks/useFetchProduct";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductDetail = () => {

    // const url = `https://dummyjson.com/products/${id}`;
    const {id} = useParams();
    const dispatch = useDispatch();
    const {product, loading, error } = useFetchProduct(`https://dummyjson.com/products/${id}`)

    if(loading) return <div className="text-blue-700">Loading Products...</div>
    if (error) return <p className="text-red-500">Error: {error}</p>;
    if (!product ) return <p>No products found.</p>; //yaha hum !product.products nahi likh rahe kyuki humne id se product fetch kiya hai

  return (
    <div className="flex justify-between items-center gap-10 max-w-7xl mx-auto my-10 p-10 border shadow-md rounded-lg">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-auto object-cover rounded mb-4"
      />
      <div >
        <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
        <p className="text-gray-600 mb-2">{product.description}</p>
        <p className="text-lg font-semibold text-green-600 mb-2">₹ {product.price}</p>
        <p className="text-sm text-gray-700 mb-2">Brand: {product.brand}</p>
        <p className="text-sm text-gray-500">Category: {product.category}</p>
        <p className="text-sm text-gray-500">Warranty: {product.warrantyInformation}</p>
        <p className="text-sm text-gray-500">Return Policy: {product.returnPolicy}</p>
        <p className="text-sm text-gray-500">Rating: {product.rating} ⭐</p>

        <button onClick={()=>dispatch(addToCart(product))} className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
            Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;