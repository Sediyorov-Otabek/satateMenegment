import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Wishlist from "@/pages/wishlist/Wishlist";
import Login from "@/pages/login/Login";
import Layotu from "@/pages/layout/Layout";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layotu />}>
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/Cart" element={<Cart />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
