import logo from "../assets/shop.png";
import search from "../assets/shopping.png";
import cart_logo from "../assets/shopping-cart.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const Header = () => {
  const cart = useSelector((state) => state.cart);
  const [product, setProduct] = useState("");
  const [input, setInput] = useState("");
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, []);
  return (
    <>
      <div className="fixed top-0 py-4 bg-gray-200 z-10 w-full h-[90px] flex justify-around items-center">
        <Link to="/" className="flex items-center">
          <img style={{ width: "70px" }} src={logo} alt="logo" />
          <h1 className="font-bold text-2xl">Aymen Store</h1>
        </Link>
        <div className="hidden border border-black md:flex items-center rounded-lg p-2 w-[30%]">
          <img
            style={{ width: "30px", marginLeft: "5px" }}
            src={search}
            alt=""
          />
          <input
            onChange={(e) => setInput(e.target.value)}
            className="outline-none ml-2 bg-transparent w-full "
            type="text"
            placeholder="Search for product"
          />
        </div>
        <Link to="/cart" className="relative flex items-center cursor-pointer">
          <h1 className="font-bold text-3xl">CART</h1>
          <img
            style={{ width: "50px", cursor: "pointer" }}
            src={cart_logo}
            alt="cart_logo"
          />
          <div className="absolute w-4 h-4 rounded-full z-10 right-[-3px] top-[4px] flex items-center justify-center text-[10px] bg-black text-white">
            {cart.length}
          </div>
        </Link>
      </div>
      <div className="fixed m-auto top-[80px] z-30 flex flex-col justify-center items-center text-center w-screen">
        {product && input
          ? product
              .filter((item) => item.title.toLowerCase().includes(input))
              .map((item) => {
                return (
                  <ul
                    key={item.id}
                    className="bg-white z-20 border border-gray-100 rounded-xl w-fit"
                  >
                    <Link to={`/product/${item.id}`}>
                      <li className="pl-8 pr-2 py-1  border-b-2 flex items-center border-gray-100  rounded-xl relative cursor-pointer hover:bg-gray-200 hover:text-gray-900">
                        <img
                          className="w-[20px] mr-2"
                          src={item.image}
                          alt=""
                        />
                        {item.title}
                      </li>
                    </Link>
                  </ul>
                );
              })
          : null}
      </div>
    </>
  );
};
export default Header;
