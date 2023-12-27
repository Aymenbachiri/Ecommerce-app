import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { addToCart } from "../redux-toolkit/slices/cart-slice";
import { useDispatch } from "react-redux";
import Footer from "../components/Footer";

const ProductDetailRoute = () => {
  const [product, setProduct] = useState("");
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`).then((res) =>
      res.json().then((product) => setProduct(product))
    );
  }, []);
  return (
    <>
      <div className="mb-[260px] p-4 ">
        <Header />
        {product ? (
          <div
            key={product.id}
            className="mt-[100px] bg-white dark:bg-gray-800 py-8 rounded-xl"
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row -mx-4">
                <div className="md:flex-1 px-4">
                  <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img
                      className="w-full h-full"
                      src={product.image}
                      alt="Product Image"
                    />
                  </div>
                  <div className="flex -mx-2 mb-4">
                    <div className="w-[60%] px-2 m-auto">
                      <button
                        onClick={() => {
                          dispatch(addToCart(product));
                        }}
                        className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
                <div className="md:flex-1 px-4">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    {product.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {product.category}
                  </p>
                  <div className="flex mb-4">
                    <div className="mr-4">
                      <span className="font-bold mr-2 text-gray-700 dark:text-gray-300">
                        Price :
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">
                        ${product.price}
                      </span>
                    </div>
                    <div>
                      <span className="font-bold mr-2 text-gray-700 dark:text-gray-300">
                        Availability :
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">
                        In Stock
                      </span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      Available Color :
                    </span>
                    <div className="flex items-center mt-2">
                      <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                      <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                      <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                      <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      Available Size :
                    </span>
                    <div className="flex items-center mt-2">
                      <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                        S
                      </button>
                      <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                        M
                      </button>
                      <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                        L
                      </button>
                      <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                        XL
                      </button>
                      <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                        XXL
                      </button>
                    </div>
                  </div>
                  <div>
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      Product Description :
                    </span>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <Footer />
    </>
  );
};

export default ProductDetailRoute;
