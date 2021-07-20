import { useContext } from "react";
import { CartContext } from "./_app";
import { Skeleton } from "antd";

const Cart = () => {
  const { cartCount, setCartCount } = useContext(CartContext);

  let myCart = "";
  let filteredCart;
  if (typeof window !== "undefined") {
    myCart = JSON.parse(localStorage.getItem("cart"));
  }
  if (!myCart) {
    return <Skeleton active />;
  }
  const handleClick = (id) => {
    filteredCart = myCart.filter((item) => {
      return item.id != id;
    });
    localStorage.setItem("cart", JSON.stringify(filteredCart));
    setCartCount(filteredCart.length);
  };

  return (
    <div className="container box-border h-auto">
      <h1 className="text-4xl font-semibold text-center pt-3">My Cart</h1>
      {myCart.map((product) => (
        <div>
          <div className="grid grid-cols-5 bg-white mt-3 h-auto box-border m-4 rounded-sm shadow-xl">
            <div className="h-60 grid place-content-center">
              <img
                src={product.image}
                alt=""
                className="h-48 ml-auto mr-auto"
              />
            </div>
            <div className="h-60 grid place-content-center text-2xl font-bold p-4">
              {product.title}
            </div>
            <div className="h-60 grid place-content-center text-xl font-semibold">
              {product.category}
            </div>
            <div className="h-60 grid place-content-center text-2xl font-bold">
              {product.price}
            </div>
            <div className="h-60 grid place-content-center">
              <button
                onClick={() => handleClick(product.id)}
                className="border-2 border-red-500 h-10 w-32 rounded-xl hover:bg-red-500 hover:text-white"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
