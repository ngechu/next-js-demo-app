import { useContext, useEffect } from "react";
import { CartContext } from "../store/CartProvider";
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
    const productIndex = myCart.findIndex((v) => v.id == id);
    if (productIndex !== -1) {
      myCart[productIndex].qty -= 1;
      if (myCart[productIndex].qty < 1) {
        myCart.splice(productIndex, 1);
      }
    }
    localStorage.setItem("cart", JSON.stringify(myCart));
    setCartCount(myCart.length);
  };
  const handlePrice = () => {
    let priceArray = myCart.map((item) => item.price * item.qty);

    return priceArray.reduce((acc, curr) => acc + curr, 0);
  };

  const handleCheckout = async () => {
    const apiPayload = myCart.map((item) => ({
      description: item.title,
      quantity: item.qty,
      itemPrice: item.price,
    }));

    const finalPayload = {
      data: {
        locale: "ke",
        apiKey: "683f70e0-ee0d-11eb-9a03-0242ac130003",
        orderNumber: "44331",
        resultUrl: "https://mypocket.doctor/",
        callbackUrl: "https://mypocket.doctor/cbresult",
        checkoutLines: apiPayload,
      },
    };
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(finalPayload),
      redirect: "follow",
    };
    const response = await fetch(
      "https://backend-dev-gpg.k8s.tracom.co.ke:2021/gpg/rest/v2/services/gpgbackend_CheckoutService/preCheckout",
      requestOptions
    );
    const res = await response.json();
    window.location.replace(res.data);
  };
  useEffect(() => {
    handlePrice();
  }, []);

  return (
    <div className="container box-border h-auto">
      <h1 className="text-4xl font-semibold text-center pt-3">My Cart</h1>
      {myCart.map((product) => (
        <div>
          <div className="grid grid-cols-5 bg-white mt-3 h-auto box-border m-4 rounded-sm shadow-xl p-8">
            <div className="h-60 grid place-content-center">
              <img
                src={product.image}
                alt=""
                className="h-48 ml-auto mr-auto"
              />
            </div>
            <div className="h-60 grid place-content-center text-2xl font-bold p-4 ">
              {product.title}
            </div>
            <div className="h-60 grid place-content-center text-xl font-semibold">
              {product.qty}
            </div>
            <div className="h-60 grid place-content-center text-2xl font-bold">
              KES {product.price}
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
      <div className="h-40 bg-gray-200 w-full mt-10 grid grid-cols-3 justify-items-center content-center pl-10 ">
        <h1 className="font-semibold text-2xl">Total</h1>
        <h1 className="font-semibold text-2xl">
          Price: KES {handlePrice() ? handlePrice() : 0}
        </h1>
        <button
          onClick={handleCheckout}
          className="border-2 border-blue-500 h-16 w-40 rounded-xl bg-blue-500"
        >
          <h1 className="font-semibold text-xl  text-white">
            Proceed to Checkout
          </h1>
        </button>
      </div>
    </div>
  );
};

export default Cart;
