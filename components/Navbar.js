import Link from "next/link";
import { useContext, useEffect } from "react";
import { CartContext } from "../pages/_app";

const Navbar = () => {
  let myCart = "";
  if (typeof window !== "undefined") {
    myCart = JSON.parse(localStorage.getItem("cart"));
  }

  const { cartCount, setCartCount } = useContext(CartContext);
  useEffect(() => {
    if (myCart.length) {
      setCartCount(myCart.length);
    }
  }, [cartCount]);

  return (
    <nav className="sticky top-0 z-10">
      <div className="box-border h-16 w-full flex items-center bg-blue-900 px-2 ">
        <div className="container w-3/4 mx-auto">
          <Link href="/">
            <a>
              <div className="inline-block font-semibold text-2xl text-white">
                Home
              </div>
            </a>
          </Link>
          <div className="inline-block float-right">
            <Link href="/cart">
              <a
                className="px-4 py-2 mt-2 text-lg text-gray-900 bg-gray-200 rounded-lg sm:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-300 "
                href="#"
              >
                <span className="badge mb-3 bg-red-800 rounded-full px-2 py-1 text-center object-left-top text-white text-sm mr-1">
                  {cartCount}
                </span>
                My Cart
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
