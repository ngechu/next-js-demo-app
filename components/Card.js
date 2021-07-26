import Link from "next/link";
import { useContext, useEffect } from "react";
import { CartContext } from "../pages/_app";

const Card = ({ title, category, price, image, id }) => {
  const { cartCount, setCartCount } = useContext(CartContext);

  let cart;
  if (typeof window !== "undefined") {
    cart = JSON.parse(`${localStorage.getItem("cart") || "[]"}`);
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const handleClick = () => {
    let productObj = {
      title: title,
      category: category,
      price: price,
      image: image,
      id: id,
    };
    cart.push(productObj);
    localStorage.setItem("cart", JSON.stringify(cart));

    setCartCount(cart.length);
  };

  return (
    <div className="w-full md:w-80 lg:w-80 pl-2 pr-2 mb-5 lg:pl-2 lg:pr-2">
      <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
        <figure className="mb-2">
          <Link href={`/products/${id}`}>
            <a>
              <img src={image} alt="" className="h-64 ml-auto mr-auto" />
            </a>
          </Link>
        </figure>
        <div className="rounded-lg p-4 bg-gray-700 flex flex-col text-center">
          <div>
            <h5 className="text-white text-xl font-semibold leading-none truncate">
              {title}
            </h5>
            <span className="text-xs text-gray-400 leading-none">
              {category}
            </span>
          </div>
          <div className="flex justify-center">
            <h2 className="text-lg text-white font-semibold">KES {price}</h2>
          </div>
          <button
            onClick={handleClick}
            className="bg-gray-600 inline-block w-auto h-10 text-white hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
