import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CartRoute from "./routes/CartRoute";
import ProductDetailRoute from "./routes/ProductDetailRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartRoute />} />
        <Route path="/product/:productId" element={<ProductDetailRoute />} />
      </Routes>
    </>
  );
}

export default App;
