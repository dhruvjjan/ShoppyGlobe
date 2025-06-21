// This component fetches and displays a list of products, allowing for search functionality.

import { useSelector } from "react-redux";
import useFetchProduct from "../hooks/useFetchProduct";
import ProductItem from "../components/ProductItem";

const ProductList = () => {
  const { product, loading, error } = useFetchProduct("https://dummyjson.com/products");
  const searchQuery = useSelector((state) => state.search.query);

  if (loading) return <p className="text-blue-500">Loading products...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!product || !product.products) return <p>No products found.</p>;

  const filteredProducts = product.products.filter((prod) =>
    prod.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 m-6">
      {filteredProducts.map((prod) => (
        <ProductItem key={prod.id} prod={prod} />
      ))}
    </div>
  );
};

export default ProductList;
