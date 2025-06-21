import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import { lazy, Suspense } from "react";
import Footer from "./components/Footer";


const App = () =>{
  const ProductDetail = lazy(() => import('./components/ProductDetail'));
  const Cart = lazy(() => import('./components/Cart'));
  const NotFound = lazy(() => import('./components/NotFound'));
  const About = lazy(() => import('./components/About'));
  const Contact = lazy(() => import('./components/Contact'));

  return(
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header/>
        <Suspense fallback={<div className="text-center text-blue-500">Loading...</div>}>
          <Routes>
            <Route path="/" element={<ProductList/>} />
            <Route path="/product/:id" element={<ProductDetail/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </Suspense>
        <Footer/>
        
      </div>
  )
}
export default App;
